import React from "react";
import { Toolbar } from "../Toolbar";
import { Text, TextTypes } from "@vanguard/Text/Text";
import { within, expect } from "storybook/test";
import { Story } from "./_Toolbar.default";

export const Regular: Story = {
  args: {
    variant: "regular",
  },
  render: (args) => (
    <Toolbar {...args}>
      <Text type={TextTypes.heading3}>
        Regular Toolbar
      </Text>
    </Toolbar>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByText("Regular Toolbar");
    await expect(title).toBeInTheDocument();
  },
};