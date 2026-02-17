import React from "react";
import { ToggleButtonGroup } from "../ToggleButtonGroup";
import { ToggleButton } from "@vanguard/ToggleButton/ToggleButton";
import { within, expect, screen } from "storybook/test";
import { Story, mockOnChange } from "./_ToggleButtonGroup.default";

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    value: "option1",
    exclusive: true,
    onChange: mockOnChange,
  },
  render: (args) => (
    <ToggleButtonGroup {...args}>
      <ToggleButton value="option1">Option 1</ToggleButton>
      <ToggleButton value="option2">Option 2</ToggleButton>
      <ToggleButton value="option3">Option 3</ToggleButton>
    </ToggleButtonGroup>
  ),
  play: async () => {
    const container = document.querySelector(".ToggleButtonGroup-container");
    await expect(container).toBeInTheDocument();

    const toggleGroup = document.querySelector(".MuiToggleButtonGroup-vertical");
    await expect(toggleGroup).toBeInTheDocument();
  },
};