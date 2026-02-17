import React from "react";
import { RadioButton } from "../RadioButton";
import { within, expect } from "storybook/test";
import { Story, mockOnChange, testOptions } from "./_RadioButton.default";

export const Checked: Story = {
  args: {
    inputName: "test-radio",
    labelText: "Selected Option",
    value: testOptions.selected,
    checked: true,
    theme: "standard",
    onChangeFn: mockOnChange,
    testId: "radio-button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioButton = canvas.getByTestId("radio-button");
    await expect(radioButton).toBeChecked();
  },
};