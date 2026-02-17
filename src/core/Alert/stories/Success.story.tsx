import React from "react";
import { within, expect } from "storybook/test";
import { Alert } from "../Alert";
import { Story, testMessages } from "./_Alert.default";

export const Success: Story = {
  args: {
    type: "success",
    children: testMessages.success,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(testMessages.success)).toBeInTheDocument();
  },
};