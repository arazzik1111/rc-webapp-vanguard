import React from "react";
import { within, expect } from "storybook/test";
import { Alert } from "../Alert";
import { Story, testMessages } from "./_Alert.default";

export const Warn: Story = {
  args: {
    type: "warn",
    children: testMessages.warn,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(testMessages.warn)).toBeInTheDocument();
  },
};