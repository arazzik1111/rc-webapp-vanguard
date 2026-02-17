import React from "react";
import { Link } from "../Link";
import { Story, testLinkText, testHref } from "./_Link.default";

export const Disabled: Story = {
  args: {
    children: testLinkText,
    href: testHref,
    disabled: true,
  },
};