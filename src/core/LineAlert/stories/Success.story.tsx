import React from "react";
import { LineAlert } from "../LineAlert";
import { Story, testMessages } from "./_LineAlert.default";

export const Success: Story = {
  args: {
    children: testMessages.success,
    type: "success",
  },
};