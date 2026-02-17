import React from "react";
import { LineAlert } from "../LineAlert";
import { Story, testMessages } from "./_LineAlert.default";

export const Default: Story = {
  args: {
    children: testMessages.default,
    type: "info",
  },
};