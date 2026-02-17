import React from "react";
import { MediaItemSelectInput } from "../MediaItemSelectInput";
import { Story, createMockOnFilesSelected, createMockOpenCallback } from "./_MediaItemSelectInput.default";

export const WithMultiple: Story = {
  args: {
    isOpen: false,
    openCallback: createMockOpenCallback(),
    onFilesSelected: createMockOnFilesSelected(),
    multiple: true,
  },
};