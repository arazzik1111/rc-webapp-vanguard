import React from "react";
import { AvatarStack } from "../AvatarStack";
import { Story, testItems } from "./_AvatarStack.default";

export const WithCustomStackWidth: Story = {
  args: {
    items: testItems,
    stackWidth: "250px",
  },
};