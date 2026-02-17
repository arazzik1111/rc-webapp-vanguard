import React from "react";
import { Divider } from "../Divider";
import { within, expect } from "storybook/test";
import { Story } from "./_Divider.default";

export const WithId: Story = {
  args: {
    id: "custom-divider-id",
  },
  render: (args) => (
    <div style={{ padding: "20px" }}>
      <div>Content above divider with id</div>
      <Divider {...args} data-testid="divider" />
      <div>Content below divider with id</div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const divider = canvas.getByTestId("divider");
    await expect(divider).toBeInTheDocument();
    await expect(divider).toHaveAttribute("id", "custom-divider-id");
  },
};