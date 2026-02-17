import React from "react";
import { Avatar } from "../Avatar";
import { Story, testIcon } from "./_Avatar.default";

export const WithIconGrayScale: Story = {
  args: {
    greyScale: true,
    icon: testIcon,
    size: "large",
  },
};