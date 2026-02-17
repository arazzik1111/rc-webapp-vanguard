import React from "react";
import { IconButton } from "../IconButton";
import { within, expect } from "storybook/test";
import { Story, testIcons } from "./_IconButton.default";

export const AllStates: Story = {
  args: {
    icon: testIcons.star,
    isActive: true,
  },
  render: (props) => {
    return (
      <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "column", gap: 2 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <div>Active+Disabled</div>
          <IconButton {...props} isActive={true} isDisabled={true} />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <div>Active+Not_Disabled</div>
          <IconButton {...props} isActive={true} isDisabled={false} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <div>Not_Active+Not_Disabled</div>
          <IconButton {...props} isActive={false} isDisabled={false} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <div>Not_Active+Disabled</div>
          <IconButton {...props} isActive={false} isDisabled={true} />
        </div>
      </div>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(4);
  },
};