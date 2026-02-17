import React from "react";
import { within, expect } from "storybook/test";
import { Alert } from "../Alert";
import { Story, testMessages } from "./_Alert.default";

export const Default: Story = {
  args: {
    type: "info",
    children: testMessages.info,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(testMessages.info)).toBeInTheDocument();
  },
};