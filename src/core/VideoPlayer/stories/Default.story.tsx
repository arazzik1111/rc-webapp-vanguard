import React from 'react';
import { Story, defaultProps, videoPlayerTest } from './_VideoPlayer.default';
import { VideoPlayer } from '../VideoPlayer';

export const Default: Story = {
  args: {
    ...defaultProps,
  },
  render: (args) => (
    <div
      style={{
        width: 400,
        height: 300,
        border: '1px solid red',
      }}
    >
      <VideoPlayer {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    await videoPlayerTest({
      canvasElement,
      expectedSrc: defaultProps.opts.src,
    });
  },
};