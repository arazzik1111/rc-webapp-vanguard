import React from "react";
import { RadioButton } from "../RadioButton";
import { within, expect } from "storybook/test";
import { Story, mockOnChange, testOptions } from "./_RadioButton.default";

export const Default: Story = {
  args: {
    inputName: "test-radio",
    labelText: "Default Option",
    value: testOptions.default,
    checked: false,
    theme: "standard",
    onChangeFn: mockOnChange,
    testId: "radio-button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioButton = canvas.getByTestId("radio-button");
    await expect(radioButton).toBeInTheDocument();

    const label = canvas.getByText("Default Option");
    await expect(label).toBeInTheDocument();
  },
};