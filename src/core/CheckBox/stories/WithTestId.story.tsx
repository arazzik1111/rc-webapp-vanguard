import React from "react";
import { CheckBox } from "../CheckBox";
import { within, expect } from "storybook/test";
import { Story, testLabels } from "./_CheckBox.default";

export const WithTestId: Story = {
  args: {
    label: testLabels.default,
    testId: "custom-checkbox-test-id",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId("custom-checkbox-test-id");
    await expect(container).toBeInTheDocument();
  },
};