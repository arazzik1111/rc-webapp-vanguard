import React from "react";
import { Avatar } from "../Avatar";
import { Story, testName, testBgColor } from "./_Avatar.default";

export const WithBgColor: Story = {
  args: {
    icon: null,
    name: testName,
    bgColor: testBgColor,
  },
};