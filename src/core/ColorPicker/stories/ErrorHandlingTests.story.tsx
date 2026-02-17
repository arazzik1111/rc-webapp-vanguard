import React from "react";
import { ColorPicker } from "../ColorPicker";
import { within, expect, fireEvent } from "storybook/test";
import { Story } from "./_ColorPicker.default";

export const ErrorHandlingTests: Story = {
  render: () => {
    const [errors, setErrors] = React.useState<string[]>([]);

    const handleColorChange = (color: string) => {
      try {
        // Simulate some processing
        if (color === "error") {
          throw new Error("Test error");
        }
        setErrors(prev => [...prev, `Successfully processed: ${color}`]);
      } catch (error) {
        setErrors(prev => [...prev, `Error: ${error}`]);
      }
    };

    return (
      <div style={{ padding: "20px" }}>
        <h3>Error Handling Tests</h3>
        
        <div data-testid="error-test-1">
          <h4>ColorPicker without callback</h4>
          <ColorPicker label="No Callback Test" color="#ff0000" />
        </div>

        <div data-testid="error-test-2">
          <h4>ColorPicker with undefined callback</h4>
          <ColorPicker label="Undefined Callback" color="#00ff00" onColorChange={undefined} />
        </div>

        <div data-testid="error-test-3">
          <h4>ColorPicker with null callback</h4>
          <ColorPicker label="Null Callback" color="#0000ff" onColorChange={null as any} />
        </div>

        <div data-testid="error-test-4">
          <h4>ColorPicker with error-prone callback</h4>
          <ColorPicker label="Error Test" color="#ffff00" onColorChange={handleColorChange} />
        </div>

        <div data-testid="error-results">
          {errors.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Test 1: No callback - should not throw error
    const errorTest1 = canvas.getByTestId("error-test-1");
    const input1 = errorTest1.querySelector('input[type="color"]') as HTMLInputElement;
    
    // This should not throw an error
    await fireEvent.change(input1, { target: { value: "#123456" } });
    await new Promise(resolve => setTimeout(resolve, 50));

    // Test 2: Undefined callback - should not throw error
    const errorTest2 = canvas.getByTestId("error-test-2");
    const input2 = errorTest2.querySelector('input[type="color"]') as HTMLInputElement;
    
    await fireEvent.change(input2, { target: { value: "#654321" } });
    await new Promise(resolve => setTimeout(resolve, 50));

    // Test 3: Null callback - should not throw error
    const errorTest3 = canvas.getByTestId("error-test-3");
    const input3 = errorTest3.querySelector('input[type="color"]') as HTMLInputElement;
    
    await fireEvent.change(input3, { target: { value: "#abcdef" } });
    await new Promise(resolve => setTimeout(resolve, 50));

    // Test 4: Working callback
    const errorTest4 = canvas.getByTestId("error-test-4");
    const input4 = errorTest4.querySelector('input[type="color"]') as HTMLInputElement;
    
    await fireEvent.change(input4, { target: { value: "#fedcba" } });
    await new Promise(resolve => setTimeout(resolve, 100));

    // Verify results
    const errorResults = canvas.getByTestId("error-results");
    await expect(errorResults).toBeInTheDocument();
  },
};