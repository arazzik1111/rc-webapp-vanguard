import React from "react";
import { Toolbar } from "../Toolbar";
import { Text, TextTypes } from "@vanguard/Text/Text";
import { IconButton } from "@vanguard/IconButton/IconButton";
import { IconNames } from "@vanguard/Icon/IconNames";
import { within, expect } from "storybook/test";
import { Story } from "./_Toolbar.default";

export const WithIconButtons: Story = {
  render: () => (
    <Toolbar>
      <IconButton isActive={false} icon={IconNames.hamburgerMenu} />
      <Text type={TextTypes.heading3} style={{ flexGrow: 1 }}>
        App Title
      </Text>
      <IconButton isActive={false} icon={IconNames.search} />
      <IconButton isActive={false} icon={IconNames.meatballsMenu} />
    </Toolbar>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByText("App Title");
    await expect(title).toBeInTheDocument();
  },
};