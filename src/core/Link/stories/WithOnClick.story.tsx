import React from "react";
import { Link } from "../Link";
import { Story, testLinkText, testOnClick } from "./_Link.default";

export const WithOnClick: Story = {
  args: {
    children: testLinkText,
    onClick: testOnClick,
  },
};