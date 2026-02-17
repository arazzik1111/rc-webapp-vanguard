import React from "react";
import { Divider } from "../Divider";
import { within, expect } from "storybook/test";
import { Story } from "./_Divider.default";

export const Default: Story = {
  render: () => (
    <div style={{ padding: "20px" }}>
      <div>Content above divider</div>
      <Divider data-testid="divider" />
      <div>Content below divider</div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const divider = canvas.getByTestId("divider");
    await expect(divider).toBeInTheDocument();
  },
};