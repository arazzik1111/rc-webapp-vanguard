import React from "react";
import { Avatar } from "../Avatar";
import { Story, testName } from "./_Avatar.default";

export const WithTranslate: Story = {
  args: {
    icon: null,
    name: testName,
    translate: true,
  },
};