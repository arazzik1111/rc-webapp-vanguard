import React from 'react';
import { within, expect, waitFor } from 'storybook/test';
import { VideoPlayer } from '../VideoPlayer';
import {
  Story,
  fallbackProps,
  mockOnReady,
  mockFallbackSrc,
} from './_VideoPlayer.default';

const fallbackDetailedTest =
  async ({
           canvasElement,
           expectedFallbackSrc,
         }: {
    canvasElement: HTMLElement;
    expectedFallbackSrc: string;
  }) => {
    mockOnReady.mockClear();

    const canvas = within(canvasElement);

    const videoContainer = await canvas.findByTestId('video-player');
    expect(videoContainer).toBeInTheDocument();
    expect(videoContainer).toHaveAttribute('data-vjs-player');

    // Wait until Video.js calls onReady and we get the player
    await waitFor(() => {
      expect(mockOnReady).toHaveBeenCalled();
    });

    const player = mockOnReady.mock.calls[0][0] as any; // videojs.Player

    // Wait until the player has some src set
    const originalSrc = await waitFor(() => {
      const src = player.currentSrc() as string | undefined;
      if (!src) {
        throw new Error('player.currentSrc() not set yet');
      }
      return src;
    });

    // 1) Non-code-4 error should NOT trigger fallback
    player.error({code: 2, message: 'Simulated network error'} as any);
    player.trigger('error');

    const srcAfterNetworkError = player.currentSrc() as string;
    expect(srcAfterNetworkError).toBe(originalSrc);

    // 2) Code 4 (MEDIA_ERR_SRC_NOT_SUPPORTED) SHOULD trigger fallback
    player.error({code: 4, message: 'Simulated SRC_NOT_SUPPORTED'} as any);
    player.trigger('error');

    const srcAfterFallback = await waitFor(() => {
      const src = player.currentSrc() as string;
      if (!src || !src.includes(expectedFallbackSrc)) {
        throw new Error('fallback src not applied yet');
      }
      return src;
    });

    // 3) A second code 4 should NOT change src again (hasTriedFallbackRef guard)
    player.error({code: 4, message: 'Simulated SRC_NOT_SUPPORTED again'} as any);
    player.trigger('error');

    const srcAfterSecondError = player.currentSrc() as string;
    expect(srcAfterSecondError).toBe(srcAfterFallback);
  };

export const WithFallback: Story = {
  args: {
    ...fallbackProps,
  },
  render: (args) => (
    <div
      style={{
        width: 400,
        height: 300,
        border: '1px solid orange',
      }}
    >
      <VideoPlayer {...args} />
    </div>
  ),
  play: async ({canvasElement}) => {
    await fallbackDetailedTest({
      canvasElement,
      expectedFallbackSrc: mockFallbackSrc,
    });
  },
};
