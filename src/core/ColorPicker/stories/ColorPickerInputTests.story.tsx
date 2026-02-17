import React from "react";
import { ColorPicker } from "../ColorPicker";
import { within, expect, fireEvent } from "storybook/test";
import { Story } from "./_ColorPicker.default";

export const ColorPickerInputTests: Story = {
  render: () => {
    const [selectedColor, setSelectedColor] = React.useState("#ff0000");
    const [onChangeCallCount, setOnChangeCallCount] = React.useState(0);
    const [lastOnChangeValue, setLastOnChangeValue] = React.useState("");

    const handleColorChange = (color: string) => {
      setSelectedColor(color);
      setOnChangeCallCount(prev => prev + 1);
      setLastOnChangeValue(color);
    };

    return (
      <div style={{ padding: "20px" }}>
        <h3>Color Picker Input Interaction Tests</h3>
        
        <div data-testid="color-picker-test">
          <h4>Test: Color Picker Input Changes</h4>
          <ColorPicker 
            label="Select Color" 
            color={selectedColor} 
            onColorChange={handleColorChange} 
          />
          
          <div data-testid="test-results" style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
            <div data-testid="current-color">Current Color: {selectedColor}</div>
            <div data-testid="onChange-call-count">onChange Called: {onChangeCallCount} times</div>
            <div data-testid="last-onChange-value">Last onChange Value: {lastOnChangeValue}</div>
          </div>
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Get the color picker input and text input
    const colorPickerTest = canvas.getByTestId("color-picker-test");
    const colorInput = colorPickerTest.querySelector('input[type="color"]') as HTMLInputElement;
    const textInput = colorPickerTest.querySelector('input[type="text"]') as HTMLInputElement;
    
    // Verify initial state
    await expect(colorInput).toBeInTheDocument();
    await expect(colorInput.value).toBe("#ff0000");
    await expect(textInput).toBeInTheDocument();
    await expect(textInput.value).toBe("#ff0000");
    
    const currentColorDisplay = canvas.getByTestId("current-color");
    const onChangeCallCount = canvas.getByTestId("onChange-call-count");
    const lastOnChangeValue = canvas.getByTestId("last-onChange-value");
    
    await expect(currentColorDisplay).toHaveTextContent("Current Color: #ff0000");
    await expect(onChangeCallCount).toHaveTextContent("onChange Called: 0 times");
    await expect(lastOnChangeValue).toHaveTextContent("Last onChange Value:");

    // Test 1: Change color to blue
    await fireEvent.change(colorInput, { target: { value: "#0000ff" } });
    
    // Wait for debounced onChange to be called
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Verify the input value changed immediately
    await expect(colorInput.value).toBe("#0000ff");
    
    // Verify the onChange function was called with correct value
    await expect(currentColorDisplay).toHaveTextContent("Current Color: #0000ff");
    await expect(onChangeCallCount).toHaveTextContent("onChange Called: 1 times");
    await expect(lastOnChangeValue).toHaveTextContent("Last onChange Value: #0000ff");
    
    // Extra check: Verify the color input reflects the new value
    await expect(colorInput).toHaveValue("#0000ff");
    
    // Extra check: Verify the text input also reflects the new value
    await expect(textInput.value).toBe("#0000ff");
    await expect(textInput).toHaveValue("#0000ff");

    // Test 2: Change color to green
    await fireEvent.change(colorInput, { target: { value: "#00ff00" } });
    
    // Wait for debounced onChange to be called
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Verify the input value changed immediately
    await expect(colorInput.value).toBe("#00ff00");
    
    // Verify the onChange function was called again with new value
    await expect(currentColorDisplay).toHaveTextContent("Current Color: #00ff00");
    await expect(onChangeCallCount).toHaveTextContent("onChange Called: 2 times");
    await expect(lastOnChangeValue).toHaveTextContent("Last onChange Value: #00ff00");
    
    // Extra check: Verify the color input reflects the new value
    await expect(colorInput).toHaveValue("#00ff00");
    
    // Extra check: Verify the text input also reflects the new value
    await expect(textInput.value).toBe("#00ff00");
    await expect(textInput).toHaveValue("#00ff00");

    // Test 3: Change color to a custom hex color
    await fireEvent.change(colorInput, { target: { value: "#a1b2c3" } });
    
    // Wait for debounced onChange to be called
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Verify the input value changed immediately
    await expect(colorInput.value).toBe("#a1b2c3");
    
    // Verify the onChange function was called again with new value
    await expect(currentColorDisplay).toHaveTextContent("Current Color: #a1b2c3");
    await expect(onChangeCallCount).toHaveTextContent("onChange Called: 3 times");
    await expect(lastOnChangeValue).toHaveTextContent("Last onChange Value: #a1b2c3");
    
    // Extra check: Verify the color input reflects the new value
    await expect(colorInput).toHaveValue("#a1b2c3");
    
    // Extra check: Verify the text input also reflects the new value
    await expect(textInput.value).toBe("#a1b2c3");
    await expect(textInput).toHaveValue("#a1b2c3");

    // Test 4: Change color to white
    await fireEvent.change(colorInput, { target: { value: "#ffffff" } });
    
    // Wait for debounced onChange to be called
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Verify the input value changed immediately
    await expect(colorInput.value).toBe("#ffffff");
    
    // Verify the onChange function was called again with new value
    await expect(currentColorDisplay).toHaveTextContent("Current Color: #ffffff");
    await expect(onChangeCallCount).toHaveTextContent("onChange Called: 4 times");
    await expect(lastOnChangeValue).toHaveTextContent("Last onChange Value: #ffffff");
    
    // Extra check: Verify the color input reflects the new value
    await expect(colorInput).toHaveValue("#ffffff");
    
    // Extra check: Verify the text input also reflects the new value
    await expect(textInput.value).toBe("#ffffff");
    await expect(textInput).toHaveValue("#ffffff");

    // Test 5: Change color to black
    await fireEvent.change(colorInput, { target: { value: "#000000" } });
    
    // Wait for debounced onChange to be called
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Verify the input value changed immediately
    await expect(colorInput.value).toBe("#000000");
    
    // Verify the onChange function was called again with new value
    await expect(currentColorDisplay).toHaveTextContent("Current Color: #000000");
    await expect(onChangeCallCount).toHaveTextContent("onChange Called: 5 times");
    await expect(lastOnChangeValue).toHaveTextContent("Last onChange Value: #000000");
    
    // Extra check: Verify the color input reflects the new value
    await expect(colorInput).toHaveValue("#000000");
    
    // Extra check: Verify the text input also reflects the new value
    await expect(textInput.value).toBe("#000000");
    await expect(textInput).toHaveValue("#000000");
  },
};