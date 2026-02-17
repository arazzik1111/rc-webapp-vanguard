import React from "react";
import { within, expect } from "storybook/test";
import { Story, selectors } from "./_ActionBar.default";

export const MessageInfo: Story = {
  args: {
    show: true,
    templateProps: {
      template: "message",
      type: "info",
      description: "This is an info message",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId(selectors.container);
    await expect(container).toBeInTheDocument();
  },
};