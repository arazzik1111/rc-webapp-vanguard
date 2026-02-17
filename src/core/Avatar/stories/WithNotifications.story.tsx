import React from "react";
import { Avatar } from "../Avatar";
import { Story, testIcon } from "./_Avatar.default";

export const WithNotifications: Story = {
  args: {
    icon: testIcon,
    hasNotifications: true,
    size: "large",
  },
};