import React from "react";
import { Toolbar } from "../Toolbar";
import { Text, TextTypes } from "@vanguard/Text/Text";
import { within, expect } from "storybook/test";
import { Story } from "./_Toolbar.default";

export const Default: Story = {
  render: () => (
    <Toolbar>
      <Text type={TextTypes.heading3}>
        Default Toolbar
      </Text>
    </Toolbar>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByText("Default Toolbar");
    await expect(title).toBeInTheDocument();
  },
};