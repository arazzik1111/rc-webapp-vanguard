import React, { useState } from "react";
import { RadioButton, RadioData } from "../RadioButton";
import { within, expect, userEvent } from "storybook/test";
import { Story } from "./_RadioButton.default";

export const InteractiveGroup: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>("option1");

    const options: RadioData[] = [
      { labelText: "Option 1", value: "option1" },
      { labelText: "Option 2", value: "option2" },
      { labelText: "Option 3", value: "option3" },
    ];

    return (
      <div style={{ padding: "20px" }}>
        <h3>Select an option:</h3>
        {options.map((option) => (
          <div key={option.value} style={{ marginBottom: "10px" }}>
            <RadioButton
              inputName="interactive-group"
              labelText={option.labelText}
              value={option.value}
              checked={selectedValue === option.value}
              theme="standard"
              onChangeFn={() => setSelectedValue(option.value)}
              testId={`radio-${option.value}`}
            />
          </div>
        ))}
        <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#e3f2fd" }}>
          Selected: {selectedValue}
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const option1 = canvas.getByTestId("radio-option1");
    const option2 = canvas.getByTestId("radio-option2");

    await expect(option1).toBeChecked();
    await expect(option2).not.toBeChecked();

    // Click option 2
    const option2Label = canvas.getByText("Option 2");
    await userEvent.click(option2Label);

    const selectedText = canvas.getByText("Selected: option2");
    await expect(selectedText).toBeInTheDocument();
  },
};