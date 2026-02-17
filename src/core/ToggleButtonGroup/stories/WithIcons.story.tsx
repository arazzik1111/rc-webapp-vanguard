import React from "react";
import { ToggleButtonGroup } from "../ToggleButtonGroup";
import { ToggleButton } from "@vanguard/ToggleButton/ToggleButton";
import { within, expect } from "storybook/test";
import { Icon } from "@vanguard/Icon/Icon";
import { IconNames } from "@vanguard/Icon/IconNames";
import { Story, mockOnChange } from "./_ToggleButtonGroup.default";

export const WithIcons: Story = {
  args: {
    value: "left",
    exclusive: true,
    onChange: mockOnChange,
  },
  render: (args) => (
    <ToggleButtonGroup {...args}>
      <ToggleButton value="left">
        <Icon>{IconNames.arrowLeft}</Icon>
      </ToggleButton>
      <ToggleButton value="center">
        <Icon>{IconNames.text}</Icon>
      </ToggleButton>
      <ToggleButton value="right">
        <Icon>{IconNames.arrowRight}</Icon>
      </ToggleButton>
    </ToggleButtonGroup>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(3);
  },
};