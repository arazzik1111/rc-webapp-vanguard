import React from "react";
import { Link } from "../Link";
import { Story, testLinkText, testHref } from "./_Link.default";

export const TargetSelf: Story = {
  args: {
    children: testLinkText,
    href: testHref,
    target: "_self",
  },
};