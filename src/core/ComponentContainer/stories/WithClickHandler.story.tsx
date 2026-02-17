import React from "react";
import { within, expect, fn } from "storybook/test";
import { Story, testChildren, testIds } from "./_ComponentContainer.default";

const mockOnClick = fn();

export const WithClickHandler: Story = {
  args: {
    onClick: mockOnClick,
    children: testChildren.clickable,
    testId: testIds.clickable,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId(testIds.clickable);
    await expect(container).toBeInTheDocument();

    // Click the container
    container.click();
    await expect(mockOnClick).toHaveBeenCalledTimes(1);
  },
};