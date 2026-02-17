import React from "react";
import { RadioButton } from "../RadioButton";
import { within, expect } from "storybook/test";
import { Story, mockOnChange, testOptions } from "./_RadioButton.default";

export const BorderedTheme: Story = {
  args: {
    inputName: "test-radio",
    theme: "bordered",
    labelText: "Bordered Option",
    value: testOptions.bordered,
    onChangeFn: mockOnChange,
    testId: "radio-button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Bordered Option");
    await expect(label).toBeInTheDocument();
  },
};