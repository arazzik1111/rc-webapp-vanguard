import React from "react";
import { within, expect } from "storybook/test";
import { Story, baseArgs } from "./_BigLegendItem.default";
import { BigLegendItem } from "../BigLegendItem";

export const Default: Story = {
  args: {
    ...baseArgs,
  },
  render: (args) => (
    <div style={{ width: "100%" }}>
      <BigLegendItem {...args} />
    </div>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Test that basic elements are rendered
    await expect(canvas.getByText("Website")).toBeInTheDocument();
    await expect(canvas.getByText("Website clicks made from our Business Profile")).toBeInTheDocument();
    await expect(canvas.getByText("110")).toBeInTheDocument();
    await expect(canvas.getByText("105")).toBeInTheDocument();
    await expect(canvas.getByText("previously")).toBeInTheDocument();

    // Test that badge is shown with correct value
    await expect(canvas.getByText("+4.8%")).toBeInTheDocument();
  },
};