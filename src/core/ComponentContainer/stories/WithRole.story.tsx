import React from "react";
import { within, expect } from "storybook/test";
import { Story, testChildren, testIds } from "./_ComponentContainer.default";

export const WithRole: Story = {
  args: {
    role: "article",
    children: testChildren.article,
    testId: testIds.article,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId(testIds.article);
    await expect(container).toBeInTheDocument();
    await expect(container).toHaveAttribute("role", "article");
  },
};