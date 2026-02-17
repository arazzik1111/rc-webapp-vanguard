import React from "react";
import { MediaItemSelectInput } from "../MediaItemSelectInput";
import { Story, createMockOnFilesSelected, createMockOpenCallback } from "./_MediaItemSelectInput.default";

export const Default: Story = {
  args: {
    isOpen: false,
    openCallback: createMockOpenCallback(),
    onFilesSelected: createMockOnFilesSelected(),
  },
};