import React from "react";
import { ColorPicker } from "../ColorPicker";
import { within, expect, fireEvent } from "storybook/test";
import { Story } from "./_ColorPicker.default";

export const StateManagementTests: Story = {
  render: () => {
    const [color1, setColor1] = React.useState("#ff0000");
    const [color2, setColor2] = React.useState("");
    const [changeCount, setChangeCount] = React.useState(0);

    const handleColor1Change = (color: string) => {
      setColor1(color);
      setChangeCount(prev => prev + 1);
    };

    const handleColor2Change = (color: string) => {
      setColor2(color);
      setChangeCount(prev => prev + 1);
    };

    return (
      <div style={{ padding: "20px" }}>
        <h3>State Management Tests</h3>
        <div data-testid="change-counter">Changes: {changeCount}</div>
        
        <div data-testid="state-test-1">
          <h4>Color Picker 1 (with initial color)</h4>
          <ColorPicker label="Color 1" color={color1} onColorChange={handleColor1Change} />
          <div data-testid="color1-value">Current: {color1}</div>
        </div>

        <div data-testid="state-test-2">
          <h4>Color Picker 2 (no initial color)</h4>
          <ColorPicker label="Color 2" color={color2} onColorChange={handleColor2Change} />
          <div data-testid="color2-value">Current: {color2 || "empty"}</div>
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Test initial state
    const changeCounter = canvas.getByTestId("change-counter");
    await expect(changeCounter).toHaveTextContent("Changes: 0");

    const color1Value = canvas.getByTestId("color1-value");
    await expect(color1Value).toHaveTextContent("Current: #ff0000");

    const color2Value = canvas.getByTestId("color2-value");
    await expect(color2Value).toHaveTextContent("Current: empty");

    // Test state changes
    const stateTest1 = canvas.getByTestId("state-test-1");
    const colorInput1 = stateTest1.querySelector('input[type="color"]') as HTMLInputElement;
    
    await fireEvent.change(colorInput1, { target: { value: "#00ff00" } });
    await new Promise(resolve => setTimeout(resolve, 100));

    const stateTest2 = canvas.getByTestId("state-test-2");
    const colorInput2 = stateTest2.querySelector('input[type="color"]') as HTMLInputElement;
    
    await fireEvent.change(colorInput2, { target: { value: "#0000ff" } });
    await new Promise(resolve => setTimeout(resolve, 100));

    // Verify state updates
    await expect(changeCounter).toHaveTextContent("Changes: 2");
  },
};