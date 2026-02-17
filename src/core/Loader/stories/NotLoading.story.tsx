import React from "react";
import { within, expect } from "storybook/test";
import { Story, testIds } from "./_Loader.default";

export const NotLoading: Story = {
  args: {
    loading: false,
    testId: testIds.loader,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loader = canvas.queryByTestId(testIds.loader);
    await expect(loader).not.toBeInTheDocument();
  },
};