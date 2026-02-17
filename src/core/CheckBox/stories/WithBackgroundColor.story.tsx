import React from "react";
import { CheckBox } from "../CheckBox";
import { within, expect } from "storybook/test";
import { Story, testLabels, testColors } from "./_CheckBox.default";

export const WithBackgroundColor: Story = {
  args: {
    label: testLabels.withBackground,
    backgroundColor: testColors.blue,
    testId: "background-checkbox",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId("background-checkbox");
    const innerDiv = container.querySelector('.vanguard-checkbox-input-content') as HTMLElement;
    const computedStyle = window.getComputedStyle(innerDiv);
    await expect(computedStyle.backgroundColor).toBe('rgb(0, 0, 255)'); // rgba to rgb
  },
};