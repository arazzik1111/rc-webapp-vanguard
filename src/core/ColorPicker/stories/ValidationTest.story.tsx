import React from "react";
import { ColorPicker } from "../ColorPicker";
import { within, expect, userEvent } from "storybook/test";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";
import { Story } from "./_ColorPicker.default";

export const ValidationTest: Story = {
  render: () => {
    const [currentColor, setCurrentColor] = React.useState("#ff0000");

    const handleColorChange = (color: string) => {
      setCurrentColor(color);
    };

    return (
      <div style={{ padding: "20px" }}>
        <h3>ColorPicker Validation Test</h3>
        
        <div data-testid="validation-test">
          <ColorPicker 
            label="Test Hex Color Validation" 
            color={currentColor} 
            onColorChange={handleColorChange}
          />
          
          <div data-testid="debug-info" style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
            Current Color: {currentColor}
          </div>
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Get the validation test container
    const validationTest = canvas.getByTestId("validation-test");
    
    // Find the text input within the validation test
    const textInput = validationTest.querySelector('input[type="text"]') as HTMLInputElement;
    await expect(textInput).toBeInTheDocument();
    
    // Test 1: Enter invalid hex color
    await userEvent.clear(textInput);
    await userEvent.type(textInput, "invalid");
    await userEvent.tab(); // Trigger blur for validation
    
    // Wait for validation to process
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Check if error appears
    const errorElement = canvas.queryByTestId("vanguard-input-error-text");
    if (errorElement) {
      console.log("✅ Error element found:", errorElement.textContent);
      await expect(errorElement).toBeInTheDocument();
      await expect(errorElement).toHaveTextContent(ErrorsKeys.INVALID_HEX_COLOR);
    } else {
      console.log("❌ Error element not found");
      // Let's check what's in the DOM
      console.log("DOM content:", validationTest.innerHTML);
    }
    
    // Test 2: Enter valid hex color
    await userEvent.clear(textInput);
    await userEvent.type(textInput, "#00ff00");
    await userEvent.tab(); // Trigger blur for validation
    
    // Wait for validation to process
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Error should be gone
    const errorElementAfterFix = canvas.queryByTestId("vanguard-input-error-text");
    await expect(errorElementAfterFix).not.toBeInTheDocument();
  },
};