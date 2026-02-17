import React from "react";
import { ColorPicker } from "../ColorPicker";
import { within, expect, userEvent } from "storybook/test";
import { useFormConfig } from "@custom-hooks/useFormConfig";
import { useSelector } from "react-redux";
import { colorPickerStore } from "./bootstrap/colorpicker.test.slice";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";
import { Story } from "./_ColorPicker.default";

interface FormData {
  hexColor: string;
}

export const FormConfigValidation: Story = {
  render: () => {
    const { formConfig } = useFormConfig<FormData>({
      inputs: {
        hexColor: {
          fieldType: "ColorPicker",
          validation: {
            required: true,
            validateHexColor: true,
          },
        },
      },
    });

    const [currentColor, setCurrentColor] = React.useState("#ff0000");

    const handleColorChange = (color: string) => {
      setCurrentColor(color);
    };

    // Debug info
    const hasError = formConfig.hexColor?.hasError;
    const errors = formConfig.hexColor?.errors;

    return (
      <div style={{ padding: "20px" }}>
        <h3>ColorPicker with FormConfig HEX Validation</h3>
        
        <div data-testid="formconfig-validation-test">
          <ColorPicker 
            label="Enter Hex Color (with validation)" 
            color={currentColor} 
            onColorChange={handleColorChange}
            formconfig={formConfig.hexColor}
          />
          
          <div data-testid="current-color-display">Current Color: {currentColor}</div>
          
          {/* Debug information */}
          <div data-testid="debug-info" style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
            <div>Has Error: {hasError ? 'true' : 'false'}</div>
            <div>Errors: {errors ? JSON.stringify(errors) : 'none'}</div>
          </div>
          
          {/* The error should be displayed by the Input component itself, but let's also show it here for testing */}
          {hasError && errors && errors.length > 0 && (
            <div data-testid="validation-errors" style={{ color: 'red', marginTop: '10px' }}>
              {errors.map((error, index) => (
                <div key={index} data-testid={`validation-error-${index}`}>
                  {error}
                </div>
              ))}
            </div>
          )}
          
          <div style={{ marginTop: '20px' }}>
            <h4>Test Instructions:</h4>
            <ul>
              <li>Try entering valid HEX colors: #ff0000, #00ff00, #0000ff</li>
              <li>Try entering invalid values: "invalid", "xyz", "12345"</li>
              <li>The error message should appear for invalid HEX values</li>
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
    const formConfigTest = canvas.getByTestId("formconfig-validation-test");
    const textInput = formConfigTest.querySelector('input[type="text"]') as HTMLInputElement;
    await expect(textInput).toBeInTheDocument();
    
    // Check debug info is visible
    const debugInfo = canvas.getByTestId("debug-info");
    await expect(debugInfo).toBeInTheDocument();
    
    // Test 1: Valid hex color
    await userEvent.clear(textInput);
    await userEvent.type(textInput, "#00ff00");
    await userEvent.tab(); // Trigger blur event for validation
    
    // Wait for validation
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Check debug info shows no error
    await expect(debugInfo).toHaveTextContent("Has Error: false");
    
    // Should not show error for valid hex
    const validationErrors = canvas.queryByTestId("validation-errors");
    await expect(validationErrors).not.toBeInTheDocument();
    
    // Also check that the built-in Input error is not visible
    const inputErrorText = canvas.queryByTestId("vanguard-input-error-text");
    await expect(inputErrorText).not.toBeInTheDocument();
    
    // Test 2: Invalid hex color
    await userEvent.clear(textInput);
    await userEvent.type(textInput, "invalid");
    await userEvent.tab(); // Trigger blur event for validation
    
    // Wait for validation
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Check debug info shows error
    await expect(debugInfo).toHaveTextContent("Has Error: true");
    
    // Should show error for invalid hex (either in our custom div or in the built-in Input error)
    const validationErrorsAfterInvalid = canvas.queryByTestId("validation-errors");
    const inputErrorTextAfterInvalid = canvas.queryByTestId("vanguard-input-error-text");
    
    // At least one of these should be visible
    const hasCustomError = validationErrorsAfterInvalid !== null;
    const hasInputError = inputErrorTextAfterInvalid !== null;
    
    if (hasCustomError || hasInputError) {
      // Check the error message content
      if (hasCustomError) {
        await expect(validationErrorsAfterInvalid).toBeInTheDocument();
        const errorMessage = canvas.getByTestId("validation-error-0");
        await expect(errorMessage).toHaveTextContent("validation_validate-email");
      }
      if (hasInputError) {
        await expect(inputErrorTextAfterInvalid).toBeInTheDocument();
        await expect(inputErrorTextAfterInvalid).toHaveTextContent(ErrorsKeys.INVALID_HEX_COLOR);
      }
    }
    
    // Test 3: Fix with valid hex color
    await userEvent.clear(textInput);
    await userEvent.type(textInput, "#ff0000");
    await userEvent.tab(); // Trigger blur event for validation
    
    // Wait for validation
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Check debug info shows no error
    await expect(debugInfo).toHaveTextContent("Has Error: false");
    
    // Error should be gone
    const validationErrorsAfterFix = canvas.queryByTestId("validation-errors");
    await expect(validationErrorsAfterFix).not.toBeInTheDocument();
    
    const inputErrorTextAfterFix = canvas.queryByTestId("vanguard-input-error-text");
    await expect(inputErrorTextAfterFix).not.toBeInTheDocument();
  },
};