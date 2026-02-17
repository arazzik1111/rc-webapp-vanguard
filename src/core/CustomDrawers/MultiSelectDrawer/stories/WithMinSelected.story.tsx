import React from "react";
import { MultiSelectDrawer } from "../MultiSelectDrawer";
import { Story, testOptions, createMockOnSave, createMockOnClose } from "./_MultiSelectDrawer.default";

export const WithMinSelected: Story = {
  args: {
    value: [],
    title: "Select Fruits (Minimum 2)",
    description: "You must select at least 2 fruits.",
    options: testOptions,
    minSelected: 2,
    onSave: createMockOnSave(),
    onClose: createMockOnClose(),
  },
};