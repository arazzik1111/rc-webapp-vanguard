import React from "react";
import { ToggleButtonGroup } from "../ToggleButtonGroup";
import { ToggleButton } from "@vanguard/ToggleButton/ToggleButton";
import { within, expect, screen } from "storybook/test";
import { Icon } from "@vanguard/Icon/Icon";
import { IconNames } from "@vanguard/Icon/IconNames";
import { Story, mockOnChange } from "./_ToggleButtonGroup.default";

export const MultipleSelection: Story = {
  args: {
    value: ["bold"],
    onChange: mockOnChange,
  },
  render: (args) => (
    <ToggleButtonGroup {...args}>
      <ToggleButton value="bold">
        <Icon>{IconNames.text}</Icon>
      </ToggleButton>
      <ToggleButton value="italic">
        <Icon>{IconNames.edit}</Icon>
      </ToggleButton>
      <ToggleButton value="underlined">
        <Icon>{IconNames.rewrite}</Icon>
      </ToggleButton>
    </ToggleButtonGroup>
  ),
  play: async () => {
    const container = document.querySelector(".ToggleButtonGroup-container");
    await expect(container).toBeInTheDocument();
  },
};