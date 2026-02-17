import React from "react";
import { Input } from "../Input";
import { within, expect } from "storybook/test";
import { Story, testLabels } from "./_Input.default";

export const WithLabelTypes: Story = {
  args: {
    label: testLabels.simple,
    labelType: "floating",
    testId: "label-types-input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId("label-types-input");
    await expect(input).toBeInTheDocument();
  },
};