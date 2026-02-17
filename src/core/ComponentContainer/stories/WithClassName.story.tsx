import React from "react";
import { within, expect } from "storybook/test";
import { Story, testChildren, testIds } from "./_ComponentContainer.default";

export const WithClassName: Story = {
  args: {
    className: "custom-class",
    children: testChildren.withClass,
    testId: testIds.custom,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId(testIds.custom);
    await expect(container).toBeInTheDocument();
    await expect(container).toHaveClass("custom-class");
  },
};