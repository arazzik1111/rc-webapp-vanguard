import React from "react";
import { within, expect, waitFor } from "storybook/test";
import { Story, testIcon } from "./_Icon.default";

export const WithRole: Story = {
  args: {
    children: testIcon,
    role: "button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      expect(canvas.getByRole("button")).toBeInTheDocument();
    });
  },
};