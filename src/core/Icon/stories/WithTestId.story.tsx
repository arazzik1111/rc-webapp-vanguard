import React from "react";
import { within, expect, waitFor } from "storybook/test";
import { Story, testIcon } from "./_Icon.default";

export const WithTestId: Story = {
  args: {
    children: testIcon,
    testId: "custom-icon",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      const icon = canvas.getByTestId("custom-icon");
      expect(icon).toBeInTheDocument();
    });
  },
};