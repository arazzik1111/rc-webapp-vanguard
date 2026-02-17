import React from "react";
import { ColorPicker } from "../ColorPicker";
import { within, expect, userEvent } from "storybook/test";
import { Story } from "./_ColorPicker.default";

export const HexValidationTests: Story = {
  render: () => {
    const [validationResults, setValidationResults] = React.useState<string[]>([]);
    const [currentColor, setCurrentColor] = React.useState("#ff0000");

    const handleColorChange = (color: string) => {
      setCurrentColor(color);
      setValidationResults(prev => [...prev, `Color changed to: ${color}`]);
    };

    return (
      <div style={{ padding: "20px" }}>
        <h3>Hex Validation Tests</h3>
        
        <div data-testid="hex-validation-test">
          <h4>Test: Text Input Hex Validation</h4>
          <ColorPicker 
            label="Enter Hex Color" 
            color={currentColor} 
            onColorChange={handleColorChange} 
          />
          <div data-testid="current-color-display">Current Color: {currentColor}</div>
          <div data-testid="validation-results">
            {validationResults.map((result, index) => (
              <div key={index} data-testid={`validation-result-${index}`}>{result}</div>
            ))}
          </div>
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Get the text input (not the color input)
    const hexValidationTest = canvas.getByTestId("hex-validation-test");
    const textInput = hexValidationTest.querySelector('input[type="text"]') as HTMLInputElement;
    await expect(textInput).toBeInTheDocument();
    
    // Test 1: Valid hex color with # prefix
    await userEvent.clear(textInput);
    await userEvent.type(textInput, "#00ff00");
    
    // Wait for debounced callback
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Check if color was updated
    const currentColorDisplay = canvas.getByTestId("current-color-display");
    await expect(currentColorDisplay).toHaveTextContent("Current Color: #00ff00");
    
    // Check if color input was also updated
    const colorInput = hexValidationTest.querySelector('input[type="color"]') as HTMLInputElement;
    await expect(colorInput).toHaveValue("#00ff00");
    
    // Test 2: Valid hex color without # prefix
    await userEvent.clear(textInput);
    await userEvent.type(textInput, "ff0000");
    
    await new Promise(resolve => setTimeout(resolve, 100));
    await expect(currentColorDisplay).toHaveTextContent("Current Color: ff0000");
    await expect(colorInput).toHaveValue("#ff0000");
    
    // Test 3: Valid 3-digit hex color
    await userEvent.clear(textInput);
    await userEvent.type(textInput, "#f0f");
    
    await new Promise(resolve => setTimeout(resolve, 100));
    await expect(currentColorDisplay).toHaveTextContent("Current Color: #f0f");
    await expect(colorInput).toHaveValue("#ff00ff");
    
    // Test 3.1: #fff should result in white (#ffffff)
    await userEvent.clear(textInput);
    await userEvent.type(textInput, "#fff");
    
    await new Promise(resolve => setTimeout(resolve, 100));
    await expect(currentColorDisplay).toHaveTextContent("Current Color: #fff");
    await expect(colorInput).toHaveValue("#ffffff");
    
    // Test 4: Invalid hex color (should not update)
    await userEvent.clear(textInput);
    await userEvent.type(textInput, "invalid");
    
    await new Promise(resolve => setTimeout(resolve, 100));
    // Color should remain unchanged (should still be #fff from previous test)
    await expect(currentColorDisplay).toHaveTextContent("Current Color: #fff");
    
    // Test 5: Empty input (should not update)
    await userEvent.clear(textInput);
    
    await new Promise(resolve => setTimeout(resolve, 100));
    // Color should remain unchanged (should still be #fff)
    await expect(currentColorDisplay).toHaveTextContent("Current Color: #fff");
    
    // Test 6: Partial hex input (should not update until valid)
    await userEvent.clear(textInput);
    await userEvent.type(textInput, "#ff");
    
    await new Promise(resolve => setTimeout(resolve, 100));
    // Color should remain unchanged (should still be #fff)
    await expect(currentColorDisplay).toHaveTextContent("Current Color: #fff");
    
    // Complete the hex input
    await userEvent.type(textInput, "ff00");
    
    await new Promise(resolve => setTimeout(resolve, 100));
    await expect(currentColorDisplay).toHaveTextContent("Current Color: #ffff00");
    await expect(colorInput).toHaveValue("#ffff00");
  },
};