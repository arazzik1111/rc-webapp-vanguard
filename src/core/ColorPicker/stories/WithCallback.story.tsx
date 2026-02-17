import React from "react";
import { ColorPicker } from "../ColorPicker";
import { within, expect, fn, fireEvent } from "storybook/test";
import { Story, testColors, waitForDebounce } from "./_ColorPicker.default";

const mockOnColorChange = fn();

export const WithCallback: Story = {
  args: {
    label: "Select Background Color",
    color: testColors.orange,
    onColorChange: mockOnColorChange,
    testId: "color-picker-callback",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const colorInput = canvas.getByTestId("color-picker-callback-color") as HTMLInputElement;
    await expect(colorInput).toBeInTheDocument();

    // Change color using fireEvent for color inputs
    await fireEvent.change(colorInput, { target: { value: testColors.green } });

    // Wait for debounced callback
    await waitForDebounce();
    await expect(mockOnColorChange).toHaveBeenCalled();
  },
};