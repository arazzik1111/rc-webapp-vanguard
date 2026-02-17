import React from "react";
import { within, expect } from "storybook/test";
import { Story, testChildren, testIds } from "./_ComponentContainer.default";

export const WithCustomStyle: Story = {
  args: {
    style: {
      backgroundColor: "#f0f0f0",
      padding: "16px",
      border: "1px solid #ccc",
      borderRadius: "8px",
    },
    children: testChildren.styled,
    testId: testIds.styled,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId(testIds.styled);
    await expect(container).toBeInTheDocument();
    await expect(container).toHaveStyle("background-color: rgb(240, 240, 240)");
    await expect(container).toHaveStyle("padding: 16px");
  },
};