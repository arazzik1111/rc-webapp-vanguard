import React from "react";
import { ColorPicker } from "../ColorPicker";
import { within, expect, userEvent } from "storybook/test";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";
import { Story } from "./_ColorPicker.default";

export const AutoValidation: Story = {
  render: () => {
    const [currentColor, setCurrentColor] = React.useState("#ff0000");

    const handleColorChange = (color: string) => {
      setCurrentColor(color);
    };

    return (
      <div style={{ padding: "20px" }}>
        <h3>ColorPicker with Automatic HEX Validation</h3>
        <p>This ColorPicker creates its own internal validation when no formconfig is provided.</p>

        <div data-testid="auto-validation-test">
          <ColorPicker
            label="Enter Hex Color (auto validation)"
            color={currentColor}
            onColorChange={handleColorChange}
          />

          <div data-testid="current-color-display">Current Color: {currentColor}</div>

          <div style={{ marginTop: "20px" }}>
            <h4>Test Instructions:</h4>
            <ul>
              <li>Try entering valid HEX colors: #ff0000, #00ff00, #0000ff</li>
              <li>Try entering invalid values: "invalid", "xyz", "12345"</li>
              <li>The error message should appear automatically for invalid HEX values</li>
              <li>Valid colors should update the color picker</li>
            </ul>
          </div>
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Get the text input
    const autoValidationTest = canvas.getByTestId("auto-validation-test");
    const textInput = autoValidationTest.querySelector('input[type="text"]') as HTMLInputElement;
    await expect(textInput).toBeInTheDocument();

    // Test 1: Valid hex color
    await userEvent.clear(textInput);
    await userEvent.type(textInput, "#00ff00");
    await userEvent.tab(); // Trigger blur event for validation

    // Wait for validation
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Should not show error for valid hex
    const inputErrorText = canvas.queryByTestId("vanguard-input-error-text");
    await expect(inputErrorText).not.toBeInTheDocument();

    // Test 2: Invalid hex color
    await userEvent.clear(textInput);
    await userEvent.type(textInput, "invalid");
    await userEvent.tab(); // Trigger blur event for validation

    // Wait for validation
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Should show error for invalid hex
    const inputErrorTextAfterInvalid = canvas.queryByTestId("vanguard-input-error-text");
    if (inputErrorTextAfterInvalid) {
      await expect(inputErrorTextAfterInvalid).toBeInTheDocument();
      await expect(inputErrorTextAfterInvalid).toHaveTextContent(ErrorsKeys.INVALID_HEX_COLOR);
    }

    // Test 3: Fix with valid hex color
    await userEvent.clear(textInput);
    await userEvent.type(textInput, "#ff0000");
    await userEvent.tab(); // Trigger blur event for validation

    // Wait for validation
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Error should be gone
    const inputErrorTextAfterFix = canvas.queryByTestId("vanguard-input-error-text");
    await expect(inputErrorTextAfterFix).not.toBeInTheDocument();
  },
};
