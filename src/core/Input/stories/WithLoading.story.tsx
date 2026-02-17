import React from "react";
import { Input } from "../Input";
import { within, expect } from "storybook/test";
import { Story } from "./_Input.default";

export const WithLoading: Story = {
  args: {
    isLoading: true,
    loadingText: "Loading data...",
    testId: "loading-input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId("loading-input");
    await expect(input).toBeInTheDocument();
    // Note: Testing loading state might require checking for skeleton or disabled state
  },
};