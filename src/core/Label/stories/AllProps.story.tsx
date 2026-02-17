import React from "react";
import { within, expect } from "storybook/test";
import { FontWeights } from "@vanguard/Text/Text";
import { Story } from "./_Label.default";

export const AllProps: Story = {
  args: {
    value: "Hello {name}, this is a {weight} label!",
    replacements: {
      name: "World",
      weight: "bold",
    },
    fontWeight: FontWeights.bold,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Hello World, this is a bold label!");
    await expect(label).toBeInTheDocument();
  },
};