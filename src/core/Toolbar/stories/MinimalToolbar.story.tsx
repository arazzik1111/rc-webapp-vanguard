import React from "react";
import { Toolbar } from "../Toolbar";
import { Text, TextTypes } from "@vanguard/Text/Text";
import { within, expect } from "storybook/test";
import { Story } from "./_Toolbar.default";

export const MinimalToolbar: Story = {
  render: () => (
    <Toolbar>
      <Text type={TextTypes.heading3} style={{ flexGrow: 1 }}>
        Minimal
      </Text>
    </Toolbar>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByText("Minimal");
    await expect(title).toBeInTheDocument();
  },
};