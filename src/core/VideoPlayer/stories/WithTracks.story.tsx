import React from 'react';
import { within, expect, waitFor } from 'storybook/test';
import { VideoPlayer } from '../VideoPlayer';
import {
  Story,
  tracksProps,
  mockOnReady,
  mockTracks,
} from './_VideoPlayer.default';

const tracksTest =
  async ({
           canvasElement,
           expectedTracks,
         }: {
    canvasElement: HTMLElement;
    expectedTracks: number;
  }) => {
    // Make sure previous stories don't leak calls
    mockOnReady.mockClear();

    const canvas = within(canvasElement);

    const videoContainer = await canvas.findByTestId('video-player');
    expect(videoContainer).toBeInTheDocument();
    expect(videoContainer).toHaveAttribute('data-vjs-player');

    // Wait until Video.js calls onReady and gives us the player instance
    await waitFor(() => {
      expect(mockOnReady).toHaveBeenCalled();
    });

    const player = mockOnReady.mock.calls[0][0] as any; // videojs.Player

    // Use Video.js API instead of DOM <track> elements
    const remoteTracks = player.remoteTextTracks(); // TextTrackList-like object
    expect(remoteTracks.length).toBe(expectedTracks);
  };

export const WithTracks: Story = {
  args: tracksProps,
  render: (args) => (
    <div style={{width: 400, height: 300, border: '1px solid orange'}}>
      <VideoPlayer {...args} />
    </div>
  ),
  play: async ({canvasElement}) => {
    await tracksTest({
      canvasElement,
      expectedTracks: mockTracks.length,
    });
  },
};
