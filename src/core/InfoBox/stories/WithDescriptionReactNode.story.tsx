import React from "react";
import { InfoBox } from "../InfoBox";
import { Story, selectors } from "./_InfoBox.default";
import { within, expect } from "storybook/test";

export const WithDescriptionReactNode: Story = {
  args: {
    title: "InfoBox Title",
    description: <span>This is a <strong>React Node</strong> description.</span>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("InfoBox Title")).toBeInTheDocument();
  },
};