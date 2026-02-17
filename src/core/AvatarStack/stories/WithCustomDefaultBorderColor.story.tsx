import React from "react";
import { AvatarStack } from "../AvatarStack";
import { Story, testItems } from "./_AvatarStack.default";

export const WithCustomDefaultBorderColor: Story = {
  args: {
    items: testItems,
    defaultBorderColor: "var(--a2900)",
  },
};