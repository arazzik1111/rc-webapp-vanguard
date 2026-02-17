import React from 'react';
import { Story } from './_VideoPlayer.default';
import { videoPlayerService } from '../VideoPlayer.service';
import { mockVideoSrc } from './_VideoPlayer.default';
import { within, expect } from 'storybook/test';
import {Button} from "@vanguard/Button/Button.tsx";

export const WithService: Story = {
  render: () => (
    <div>
      <Button
        onClick={() => {
          videoPlayerService.open(mockVideoSrc);
        }}
        testId={"open-video-modal"}
      >
        Open Video Modal
      </Button>
    </div>
  ),
  play: async ({ canvasElement }) => {
    // Test that the button is rendered
    const canvas = within(canvasElement);
    const button = await canvas.findByTestId('open-video-modal');
    await expect(button).toBeInTheDocument();
  },
};