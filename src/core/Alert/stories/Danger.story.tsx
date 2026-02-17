import React from "react";
import { within, expect } from "storybook/test";
import { Alert } from "../Alert";
import { Story, testMessages } from "./_Alert.default";

export const Danger: Story = {
  args: {
    type: "danger",
    children: testMessages.danger,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(testMessages.danger)).toBeInTheDocument();
  },
};