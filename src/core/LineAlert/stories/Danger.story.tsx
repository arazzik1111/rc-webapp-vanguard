import React from "react";
import { LineAlert } from "../LineAlert";
import { Story, testMessages } from "./_LineAlert.default";

export const Danger: Story = {
  args: {
    children: testMessages.danger,
    type: "danger",
  },
};