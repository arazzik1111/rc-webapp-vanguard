import React from "react";
import { RadioButton } from "../RadioButton";
import { within, expect } from "storybook/test";
import { Story, mockOnChange, testOptions } from "./_RadioButton.default";

export const SuccessTheme: Story = {
  args: {
    inputName: "test-radio",
    theme: "success",
    labelText: "Success Option",
    value: testOptions.success,
    checked: true,
    onChangeFn: mockOnChange,
    testId: "radio-button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Success Option");
    await expect(label).toBeInTheDocument();
  },
};