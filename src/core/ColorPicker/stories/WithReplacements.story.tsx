import React from "react";
import { ColorPicker } from "../ColorPicker";
import { within, expect } from "storybook/test";
import { Story, testColors } from "./_ColorPicker.default";

export const WithReplacements: Story = {
  render: () => (
    <ColorPicker
      label="Choose {type} color for {element}"
      replacements={{
        type: "primary",
        element: "button",
      }}
      color={testColors.purple}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Choose primary color for button");
    await expect(label).toBeInTheDocument();
  },
};