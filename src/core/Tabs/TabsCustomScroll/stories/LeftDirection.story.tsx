import React from "react";
import { within, expect, userEvent } from "storybook/test";
import { Story } from "./_TabsCustomScroll.default";

export const LeftDirection: Story = {
  args: {
    direction: "left",
    onClick: () => console.log("Left scroll clicked"),
    disabled: false,
    testId: "action",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const scrollButton = canvas.getByTestId('action');
    await expect(scrollButton).toBeInTheDocument();

    // Test click interaction
    await userEvent.click(scrollButton);
  },
};