import React from "react";
import { ColorPicker } from "../ColorPicker";
import { within, expect } from "storybook/test";
import { Story } from "./_ColorPicker.default";

export const InteractiveDemo: Story = {
  render: () => {
    const [selectedColor, setSelectedColor] = React.useState("#4caf50");

    return (
      <div style={{ padding: "20px" }}>
        <ColorPicker label="Choose Theme Color" color={selectedColor} onColorChange={setSelectedColor} />
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            backgroundColor: selectedColor,
            color: "white",
            borderRadius: "4px",
          }}
        >
          Preview: This box uses the selected color ({selectedColor})
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const preview = canvas.getByText(/Preview: This box uses the selected color/);
    await expect(preview).toBeInTheDocument();
  },
};