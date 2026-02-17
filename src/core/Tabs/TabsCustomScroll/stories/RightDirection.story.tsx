import React from "react";
import { within, expect, userEvent } from "storybook/test";
import { Story } from "./_TabsCustomScroll.default";

export const RightDirection: Story = {
  args: {
    direction: "right",
    onClick: () => console.log("Right scroll clicked"),
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