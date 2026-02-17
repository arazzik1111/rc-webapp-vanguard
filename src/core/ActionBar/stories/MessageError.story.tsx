import React from "react";
import { within, expect } from "storybook/test";
import { Story, selectors } from "./_ActionBar.default";

export const MessageError: Story = {
  args: {
    show: true,
    templateProps: {
      template: "message",
      type: "error",
      description: "This is an error message",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId(selectors.container);
    await expect(container).toBeInTheDocument();
  },
};