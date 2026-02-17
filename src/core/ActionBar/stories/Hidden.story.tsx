import React from "react";
import { within, expect } from "storybook/test";
import { Story, selectors } from "./_ActionBar.default";

export const Hidden: Story = {
  args: {
    show: false,
    templateProps: {
      template: "message",
      description: "This message should be hidden",
      type: "info",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId(selectors.container);
    await expect(container).toBeInTheDocument();
    // Check if the component has the hidden transform style
    await expect(container.style.transform).toBe("translateY(100%)");
  },
};