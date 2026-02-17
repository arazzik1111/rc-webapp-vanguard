import React from "react";
import { ColorPicker } from "../ColorPicker";
import { within, expect, fireEvent } from "storybook/test";
import { Story } from "./_ColorPicker.default";

export const ComprehensiveTests: Story = {
  render: () => {
    const [testResults, setTestResults] = React.useState<string[]>([]);
    const [currentColor, setCurrentColor] = React.useState("#ff0000");

    const handleColorChange = (color: string) => {
      setCurrentColor(color);
      setTestResults(prev => [...prev, `Color changed to: ${color}`]);
    };

    return (
      <div style={{ padding: "20px" }}>
        <h3>Comprehensive ColorPicker Tests</h3>
        
        {/* Test 1: Basic rendering */}
        <div data-testid="test-basic">
          <h4>Test 1: Basic Rendering</h4>
          <ColorPicker label="Basic Color Picker" />
        </div>

        {/* Test 2: With initial color */}
        <div data-testid="test-initial-color">
          <h4>Test 2: With Initial Color</h4>
          <ColorPicker label="Initial Color Test" color="#00ff00" />
        </div>

        {/* Test 3: With callback */}
        <div data-testid="test-callback">
          <h4>Test 3: With Callback</h4>
          <ColorPicker label="Callback Test" color={currentColor} onColorChange={handleColorChange} />
          <div data-testid="callback-results">
            {testResults.map((result, index) => (
              <div key={index}>{result}</div>
            ))}
          </div>
        </div>

        {/* Test 4: With text replacements */}
        <div data-testid="test-replacements">
          <h4>Test 4: Text Replacements</h4>
          <ColorPicker 
            label="Choose {type} color for {element}" 
            replacements={{ type: "primary", element: "header" }}
            color="#0000ff"
          />
        </div>

        {/* Test 5: Partial replacements */}
        <div data-testid="test-partial-replacements">
          <h4>Test 5: Partial Replacements</h4>
          <ColorPicker 
            label="Select {type} color for {missing}" 
            replacements={{ type: "secondary" }}
            color="#ff00ff"
          />
        </div>

        {/* Test 6: Empty replacements */}
        <div data-testid="test-empty-replacements">
          <h4>Test 6: Empty Replacements</h4>
          <ColorPicker 
            label="Pick {color} shade" 
            replacements={{}}
            color="#ffff00"
          />
        </div>

        {/* Test 7: No replacements object */}
        <div data-testid="test-no-replacements">
          <h4>Test 7: No Replacements Object</h4>
          <ColorPicker label="Simple label" color="#00ffff" />
        </div>

        {/* Test 8: Edge cases */}
        <div data-testid="test-edge-cases">
          <h4>Test 8: Edge Cases</h4>
          <ColorPicker label="Edge Case Test" color="" />
          <ColorPicker label="Undefined Initial" color={undefined} />
          <ColorPicker label="Null Initial" color={null as any} />
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Test 1: Basic rendering
    const basicTest = canvas.getByTestId("test-basic");
    const basicLabel = within(basicTest).getByText("Basic Color Picker");
    await expect(basicLabel).toBeInTheDocument();
    
    const basicColorInput = basicTest.querySelector('input[type="color"]') as HTMLInputElement;
    await expect(basicColorInput).toBeInTheDocument();
    await expect(basicColorInput.value).toBe("#000000"); // Default empty value

    // Test 2: With initial color
    const initialColorTest = canvas.getByTestId("test-initial-color");
    const initialColorInput = initialColorTest.querySelector('input[type="color"]') as HTMLInputElement;
    await expect(initialColorInput).toBeInTheDocument();
    await expect(initialColorInput.value).toBe("#00ff00");

    // Test 3: Callback functionality
    const callbackTest = canvas.getByTestId("test-callback");
    const callbackColorInput = callbackTest.querySelector('input[type="color"]') as HTMLInputElement;
    await expect(callbackColorInput).toBeInTheDocument();
    
    // Test color change with callback
    await fireEvent.change(callbackColorInput, { target: { value: "#123456" } });
    
    // Wait for debounced callback and check results
    await new Promise(resolve => setTimeout(resolve, 100));
    const callbackResults = canvas.getByTestId("callback-results");
    await expect(callbackResults).toBeInTheDocument();

    // Test 4: Text replacements
    const replacementsTest = canvas.getByTestId("test-replacements");
    const replacedLabel = within(replacementsTest).getByText("Choose primary color for header");
    await expect(replacedLabel).toBeInTheDocument();

    // Test 5: Partial replacements
    const partialReplacementsTest = canvas.getByTestId("test-partial-replacements");
    const partialLabel = within(partialReplacementsTest).getByText("Select secondary color for {missing}");
    await expect(partialLabel).toBeInTheDocument();

    // Test 6: Empty replacements
    const emptyReplacementsTest = canvas.getByTestId("test-empty-replacements");
    const emptyLabel = within(emptyReplacementsTest).getByText("Pick {color} shade");
    await expect(emptyLabel).toBeInTheDocument();

    // Test 7: No replacements object
    const noReplacementsTest = canvas.getByTestId("test-no-replacements");
    const simpleLabel = within(noReplacementsTest).getByText("Simple label");
    await expect(simpleLabel).toBeInTheDocument();

    // Test 8: Edge cases
    const edgeCasesTest = canvas.getByTestId("test-edge-cases");
    const edgeCaseInputs = edgeCasesTest.querySelectorAll('input[type="color"]');
    await expect(edgeCaseInputs).toHaveLength(3);
    
    // Test empty string initial color
    await expect(edgeCaseInputs[0] as HTMLInputElement).toHaveValue("#000000");
    // Test undefined initial color
    await expect(edgeCaseInputs[1] as HTMLInputElement).toHaveValue("#000000");
    // Test null initial color
    await expect(edgeCaseInputs[2] as HTMLInputElement).toHaveValue("#000000");

    // Test multiple color changes
    await fireEvent.change(callbackColorInput, { target: { value: "#abcdef" } });
    await fireEvent.change(callbackColorInput, { target: { value: "#fedcba" } });
    
    // Wait for debounced callbacks
    await new Promise(resolve => setTimeout(resolve, 100));

    // Test invalid color format
    await fireEvent.change(callbackColorInput, { target: { value: "invalid-color" } });
    await new Promise(resolve => setTimeout(resolve, 100));

    // Test empty color value
    await fireEvent.change(callbackColorInput, { target: { value: "" } });
    await new Promise(resolve => setTimeout(resolve, 100));
  },
};