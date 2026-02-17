import React from "react";
import { LineAlert } from "../LineAlert";
import { Story, testMessages } from "./_LineAlert.default";

export const Warning: Story = {
  args: {
    children: testMessages.warning,
    type: "warning",
  },
};