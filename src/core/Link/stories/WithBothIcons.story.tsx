import React from "react";
import { Link } from "../Link";
import { Story, testLinkText, testHref } from "./_Link.default";
import { IconNames } from "@vanguard/Icon/IconNames";

export const WithBothIcons: Story = {
  args: {
    children: testLinkText,
    href: testHref,
    iconLeft: true,
    newTabIcon: true,
    iconName: IconNames.check,
  },
};