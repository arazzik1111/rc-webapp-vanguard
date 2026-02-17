import React from "react";
import { RadioButton } from "../RadioButton";
import { within, expect } from "storybook/test";
import { Story, mockOnChange, testOptions } from "./_RadioButton.default";

export const WithReplacements: Story = {
  args: {
    inputName: "test-radio",
    labelText: "Hello {name}, choose {option}",
    replacements: {
      name: "User",
      option: "wisely",
    },
    value: testOptions.replacement,
    onChangeFn: mockOnChange,
    testId: "radio-button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Hello User, choose wisely");
    await expect(label).toBeInTheDocument();
  },
};