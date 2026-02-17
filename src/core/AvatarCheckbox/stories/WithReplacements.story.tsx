import React from "react";
import { AvatarCheckbox } from "../AvatarCheckbox";
import { within, expect } from "storybook/test";
import { Story, testIcons } from "./_AvatarCheckbox.default";

export const WithReplacements: Story = {
  args: {
    icon: testIcons.facebook,
    popoverMessage: "Hello {{name}}, this is a test",
    replacements: { name: "User" },
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
  },
};