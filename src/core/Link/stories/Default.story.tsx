import React from "react";
import { Link } from "../Link";
import { Story, testLinkText, testHref } from "./_Link.default";

export const Default: Story = {
  args: {
    children: testLinkText,
    href: testHref,
    newTabIcon: true,
    target: "_blank",
  },
};