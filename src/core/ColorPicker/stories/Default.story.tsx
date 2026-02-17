import React from "react";
import { ColorPicker } from "../ColorPicker";
import { within, expect } from "storybook/test";
import { Story, testColors } from "./_ColorPicker.default";

export const Default: Story = {
  args: {
    label: "Choose Color",
    color: testColors.darkBlue,
    testId: "color-picker",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Choose Color");
    await expect(label).toBeInTheDocument();

    const colorInput = canvas.getByTestId("color-picker-color");
    await expect(colorInput).toBeInTheDocument();
    await expect(colorInput).toHaveValue(testColors.darkBlue);
  },
};