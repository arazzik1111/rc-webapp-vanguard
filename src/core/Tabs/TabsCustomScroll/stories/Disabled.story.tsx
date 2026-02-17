import React from "react";
import { within, expect } from "storybook/test";
import { Story } from "./_TabsCustomScroll.default";

export const Disabled: Story = {
  args: {
    direction: "left",
    onClick: () => console.log("Should not be called"),
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // When disabled, the component returns null, so no element should be present
    const scrollButton = canvas.queryByTestId('action');
    await expect(scrollButton).not.toBeInTheDocument();
  },
};