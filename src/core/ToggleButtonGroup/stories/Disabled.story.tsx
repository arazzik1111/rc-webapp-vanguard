import React from "react";
import { ToggleButtonGroup } from "../ToggleButtonGroup";
import { ToggleButton } from "@vanguard/ToggleButton/ToggleButton";
import { within, expect } from "storybook/test";
import { Story, mockOnChange } from "./_ToggleButtonGroup.default";

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "left",
    onChange: mockOnChange,
  },
  render: (args) => (
    <ToggleButtonGroup {...args}>
      <ToggleButton value="left">Left</ToggleButton>
      <ToggleButton value="center">Center</ToggleButton>
      <ToggleButton value="right">Right</ToggleButton>
    </ToggleButtonGroup>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");

    for (const button of buttons) {
      await expect(button).toBeDisabled();
    }
  },
};