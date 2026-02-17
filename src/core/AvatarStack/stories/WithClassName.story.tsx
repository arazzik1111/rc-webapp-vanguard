import React from "react";
import { AvatarStack } from "../AvatarStack";
import { Story, testItems } from "./_AvatarStack.default";

export const WithClassName: Story = {
  args: {
    items: testItems,
    className: "custom-avatar-stack",
  },
};