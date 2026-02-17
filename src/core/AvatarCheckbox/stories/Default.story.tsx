import React from "react";
import { AvatarCheckbox } from "../AvatarCheckbox";
import { within, expect } from "storybook/test";
import { Story, testIcons } from "./_AvatarCheckbox.default";

export const Default: Story = {
  args: {
    icon: testIcons.facebook,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
  },
};