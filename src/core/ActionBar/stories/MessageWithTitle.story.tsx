import React from "react";
import { within, expect } from "storybook/test";
import { Story, selectors } from "./_ActionBar.default";

export const MessageWithTitle: Story = {
  args: {
    show: true,
    templateProps: {
      template: "message",
      type: "info",
      title: "Important Notice",
      description: "This message has both title and description",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId(selectors.container);
    await expect(container).toBeInTheDocument();
    // Check that title is rendered
    await expect(canvas.getByText("Important Notice")).toBeInTheDocument();
  },
};