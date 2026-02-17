import React from "react";
import { TextEditDrawer } from "../TextEditDrawer";
import { Story, testValue, testTitle, testDescription, testMaxLength, createMockOnSave, createMockOnClose } from "./_TextEditDrawer.default";

export const Default: Story = {
  args: {
    value: testValue,
    title: testTitle,
    description: testDescription,
    maxLength: testMaxLength,
    onSave: createMockOnSave(),
    onClose: createMockOnClose(),
  },
};