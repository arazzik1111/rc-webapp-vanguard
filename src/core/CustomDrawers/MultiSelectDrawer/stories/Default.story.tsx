import React from "react";
import { MultiSelectDrawer } from "../MultiSelectDrawer";
import { Story, testOptions, testValue, createMockOnSave, createMockOnClose } from "./_MultiSelectDrawer.default";

export const Default: Story = {
  args: {
    value: testValue,
    title: "Select Fruits",
    description: "Choose your favorite fruits from the list below.",
    options: testOptions,
    onSave: createMockOnSave(),
    onClose: createMockOnClose(),
  },
};