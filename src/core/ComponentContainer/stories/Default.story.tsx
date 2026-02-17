import React from "react";
import { within, expect } from "storybook/test";
import { Story, testChildren, testIds } from "./_ComponentContainer.default";

export const Default: Story = {
  args: {
    children: testChildren.default,
    testId: testIds.default,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId(testIds.default);
    await expect(container).toBeInTheDocument();
    await expect(container).toHaveTextContent(testChildren.default);
  },
};