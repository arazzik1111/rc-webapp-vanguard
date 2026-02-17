import React from "react";
import { userEvent, within, expect } from "storybook/test";
import { Story, defaultProps, testMarks, selectors } from "./_Slider.default";

export const WithMarks: Story = {
  args: {
    ...defaultProps,
    marks: testMarks,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that slider renders with marks
    const slider = canvas.getByRole("slider");
    await expect(slider).toBeInTheDocument();

    // Check that marks are displayed
    const markLabels = canvas.getAllByText(/^\d+$/); // Match numeric labels
    await expect(markLabels).toHaveLength(5); // 0, 25, 50, 75, 100

    // Check initial value
    await expect(slider).toHaveAttribute("aria-valuenow", "50");
  },
};