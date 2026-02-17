import React from "react";
import { within, expect } from "storybook/test";
import { Story, testChildren, testIds } from "./_ComponentContainer.default";

export const WithId: Story = {
  args: {
    id: "custom-id",
    children: testChildren.withId,
    testId: testIds.withId,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId(testIds.withId);
    await expect(container).toBeInTheDocument();
    await expect(container).toHaveAttribute("id", "custom-id");
  },
};