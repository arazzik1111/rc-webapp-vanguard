import React from "react";
import { AvatarCheckbox } from "../AvatarCheckbox";
import { within, expect } from "storybook/test";
import { Story, testIcons } from "./_AvatarCheckbox.default";

export const WithInstagramIcon: Story = {
  args: {
    icon: testIcons.instagram,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
  },
};