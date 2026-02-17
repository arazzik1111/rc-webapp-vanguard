import React from "react";
import { ColorPicker } from "../ColorPicker";
import { within, expect, userEvent } from "storybook/test";
import { Story } from "./_ColorPicker.default";

export const WhiteColorTest: Story = {
  render: () => {
    const [currentColor, setCurrentColor] = React.useState("#000000");

    const handleColorChange = (color: string) => {
      setCurrentColor(color);
    };

    return (
      <div style={{ padding: "20px" }}>
        <h3>White Color Test</h3>
        <p>Test that entering "#fff" results in white color (#ffffff)</p>
        
        <div data-testid="white-color-test">
          <ColorPicker 
            label="Enter #fff to get white" 
            color={currentColor} 
            onColorChange={handleColorChange} 
          />
          <div data-testid="current-color-display">Current Color: {currentColor}</div>
          <div 
            data-testid="color-preview" 
            style={{ 
              width: "50px", 
              height: "50px", 
              backgroundColor: currentColor, 
              border: "1px solid #ccc",
              marginTop: "10px"
            }}
          />
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Get the test container
    const whiteColorTest = canvas.getByTestId("white-color-test");
    
    // Get the text input (not the color input)
    const textInput = whiteColorTest.querySelector('input[type="text"]') as HTMLInputElement;
    await expect(textInput).toBeInTheDocument();
    
    // Get the color input
    const colorInput = whiteColorTest.querySelector('input[type="color"]') as HTMLInputElement;
    await expect(colorInput).toBeInTheDocument();
    
    // Get the current color display
    const currentColorDisplay = canvas.getByTestId("current-color-display");
    
    // Initial state check
    await expect(currentColorDisplay).toHaveTextContent("Current Color: #000000");
    await expect(colorInput).toHaveValue("#000000");
    
    // Test: Enter "#fff" should result in white (#ffffff)
    await userEvent.clear(textInput);
    await userEvent.type(textInput, "#fff");
    
    // Wait for debounced callback
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Verify that the color was updated to white (preserves original input format)
    await expect(currentColorDisplay).toHaveTextContent("Current Color: #fff");
    await expect(colorInput).toHaveValue("#ffffff");
    
    // Verify the color preview shows white
    const colorPreview = canvas.getByTestId("color-preview");
    const computedStyle = window.getComputedStyle(colorPreview);
    await expect(computedStyle.backgroundColor).toBe("rgb(255, 255, 255)");
  },
};