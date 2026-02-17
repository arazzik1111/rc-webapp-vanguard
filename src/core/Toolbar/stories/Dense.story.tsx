import React from "react";
import { Toolbar } from "../Toolbar";
import { Text, TextTypes } from "@vanguard/Text/Text";
import { IconButton } from "@vanguard/IconButton/IconButton";
import { IconNames } from "@vanguard/Icon/IconNames";
import { Button, ButtonSizes } from "@vanguard/Button/Button";
import { within, expect } from "storybook/test";
import { Story } from "./_Toolbar.default";

export const Dense: Story = {
  args: {
    variant: "dense",
  },
  render: (args) => (
    <Toolbar {...args}>
      <IconButton isActive={false} icon={IconNames.hamburgerMenu} />
      <Text type={TextTypes.text} style={{ flexGrow: 1 }}>
        Dense Toolbar
      </Text>
      <Button size={ButtonSizes.small}>Action</Button>
    </Toolbar>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByText("Dense Toolbar");
    await expect(title).toBeInTheDocument();
  },
};