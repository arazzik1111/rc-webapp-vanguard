import React from 'react';
import { Story, mockFallbackSrc } from './_VideoPlayer.default';
import { videoPlayerService } from '../VideoPlayer.service';
import { within, expect } from 'storybook/test';
import { Button } from "@vanguard/Button/Button.tsx";

export const WithServiceAndFallback: Story = {
  render: () => (
    <div>
      <Button
        testId={"open-video-modal-with-fallback"}
        onClick={() => {
          // Simulate “localized video that might 404” + English fallback
          videoPlayerService.open(
            'https://invalid-url.com/non-existing-locale-video.mp4',
            mockFallbackSrc,
          );
        }}
      >
        Open Video Modal (with fallback)
      </Button>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // For this story we just verify the wiring: the button is rendered
    const button = await canvas.findByTestId('open-video-modal-with-fallback');
    await expect(button).toBeInTheDocument();
  },
};
