import React from "react";
import { ToggleButtonGroup } from "../ToggleButtonGroup";
import { ToggleButton } from "@vanguard/ToggleButton/ToggleButton";
import { expect, screen } from "storybook/test";
import { Story, mockOnChange } from "./_ToggleButtonGroup.default";

export const Default: Story = {
  args: {
    onChange: mockOnChange,
  },
  render: (args) => (
    <ToggleButtonGroup {...args}>
      <ToggleButton value="left">Left</ToggleButton>
      <ToggleButton value="center">Center</ToggleButton>
      <ToggleButton value="right">Right</ToggleButton>
    </ToggleButtonGroup>
  ),
  play: async () => {
    const leftButton = screen.getByText("Left");
    await expect(leftButton).toBeInTheDocument();

    const centerButton = screen.getByText("Center");
    await expect(centerButton).toBeInTheDocument();

    const rightButton = screen.getByText("Right");
    await expect(rightButton).toBeInTheDocument();
  },
};