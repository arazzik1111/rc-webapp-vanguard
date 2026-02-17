import React from "react";
import { ColorPicker } from "../ColorPicker";
import { within, expect, fn } from "storybook/test";
import { Story } from "./_ColorPicker.default";

const mockOnColorChange = fn();

export const NoInitialColor: Story = {
  render: () => (
    <ColorPicker
      label="Pick a Color"
      onColorChange={mockOnColorChange}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Pick a Color");
    await expect(label).toBeInTheDocument();

    const colorInput = canvasElement.querySelector('input[type="color"]');
    await expect(colorInput).toBeInTheDocument();
  },
};