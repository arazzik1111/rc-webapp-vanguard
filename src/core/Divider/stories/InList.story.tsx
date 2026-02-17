import React from "react";
import { Divider } from "../Divider";
import { within, expect } from "storybook/test";
import { Story } from "./_Divider.default";

export const InList: Story = {
  render: () => (
    <div style={{ padding: "20px" }}>
      <div>List Item 1</div>
      <Divider data-testid="divider" />
      <div>List Item 2</div>
      <Divider data-testid="divider" />
      <div>List Item 3</div>
      <Divider data-testid="divider" />
      <div>List Item 4</div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dividers = canvas.getAllByTestId("divider");
    await expect(dividers).toHaveLength(3);
  },
};