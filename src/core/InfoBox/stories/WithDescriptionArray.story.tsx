import React from "react";
import { InfoBox } from "../InfoBox";
import { Story, selectors } from "./_InfoBox.default";
import { within, expect } from "storybook/test";

export const WithDescriptionArray: Story = {
  args: {
    title: "InfoBox Title",
    description: ["First line of description.", "Second line of description."],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("InfoBox Title")).toBeInTheDocument();
    await expect(canvas.getByText("First line of description.")).toBeInTheDocument();
    await expect(canvas.getByText("Second line of description.")).toBeInTheDocument();
  },
};