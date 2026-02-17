import React from "react";
import { TextEditDrawer } from "../TextEditDrawer";
import { Story, testTitle, createMockOnSave, createMockOnClose } from "./_TextEditDrawer.default";

export const Required: Story = {
  args: {
    value: "",
    title: testTitle,
    description: "This field is required and cannot be empty.",
    required: true,
    onSave: createMockOnSave(),
    onClose: createMockOnClose(),
  },
};