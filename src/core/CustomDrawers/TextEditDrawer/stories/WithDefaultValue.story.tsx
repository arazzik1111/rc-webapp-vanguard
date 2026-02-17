import React from "react";
import { TextEditDrawer } from "../TextEditDrawer";
import { Story, testValue, testDefaultValue, testTitle, createMockOnSave, createMockOnClose } from "./_TextEditDrawer.default";

export const WithDefaultValue: Story = {
  args: {
    value: testValue,
    defaultValue: testDefaultValue,
    title: testTitle,
    onSave: createMockOnSave(),
    onClose: createMockOnClose(),
  },
};