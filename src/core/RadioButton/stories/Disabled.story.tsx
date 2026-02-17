import React from "react";
import { RadioButton } from "../RadioButton";
import { within, expect } from "storybook/test";
import { Story, mockOnChange, testOptions } from "./_RadioButton.default";

export const Disabled: Story = {
  args: {
    inputName: "test-radio",
    disabled: true,
    labelText: "Disabled Option",
    value: testOptions.disabled,
    onChangeFn: mockOnChange,
    testId: "radio-button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioButton = canvas.getByTestId("radio-button");
    await expect(radioButton).toBeDisabled();
  },
};