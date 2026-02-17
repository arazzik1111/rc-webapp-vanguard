import React from "react";
import { within, expect } from "storybook/test";
import { Story, selectors } from "./_ActionBar.default";

export const MessageTemplate: Story = {
  args: {
    show: true,
    templateProps: {
      template: "message",
      description: "Important notification message",
      type: "warning",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId(selectors.container);
    await expect(container).toBeInTheDocument();
  },
};