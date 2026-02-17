import React from "react";
import { Input } from "../Input";
import { within, expect } from "storybook/test";
import { Story, testLabels } from "./_Input.default";

export const WithLabel: Story = {
  args: {
    label: testLabels.simple,
    testId: "with-label-input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId("with-label-input");
    const label = canvas.getByText((content, element) => {
      return element?.tagName === 'LABEL' && content.includes(testLabels.simple);
    });
    await expect(input).toBeInTheDocument();
    await expect(label).toBeInTheDocument();
  },
};