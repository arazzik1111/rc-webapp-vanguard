import React from "react";
import { Divider } from "../Divider";
import { within, expect } from "storybook/test";
import { Story } from "./_Divider.default";

export const WithCustomClass: Story = {
  args: {
    className: "custom-divider-class",
  },
  render: (args) => (
    <div style={{ padding: "20px" }}>
      <div>Content above custom divider</div>
      <Divider {...args} data-testid="divider" />
      <div>Content below custom divider</div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const divider = canvas.getByTestId("divider");
    await expect(divider).toBeInTheDocument();
    await expect(divider).toHaveClass("custom-divider-class");
  },
};