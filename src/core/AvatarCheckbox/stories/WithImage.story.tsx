import React from "react";
import { AvatarCheckbox } from "../AvatarCheckbox";
import { within, expect } from "storybook/test";
import { Story } from "./_AvatarCheckbox.default";

export const WithImage: Story = {
  args: {
    image: "https://via.placeholder.com/150",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
  },
};