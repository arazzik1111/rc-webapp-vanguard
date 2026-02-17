import React from "react";
import { RadioButton } from "../RadioButton";
import { within, expect } from "storybook/test";
import { Story, mockOnChange, testOptions } from "./_RadioButton.default";

export const WithChildren: Story = {
  args: {
    inputName: "test-radio",
    labelText: "Option with children",
    value: testOptions.withChildren,
    checked: true,
    onChangeFn: mockOnChange,
    testId: "radio-button",
    children: (
      <div style={{ marginTop: "10px", padding: "10px", backgroundColor: "#f0f0f0" }}>
        This content appears when the radio button is checked
      </div>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const childContent = canvas.getByText("This content appears when the radio button is checked");
    await expect(childContent).toBeInTheDocument();
  },
};