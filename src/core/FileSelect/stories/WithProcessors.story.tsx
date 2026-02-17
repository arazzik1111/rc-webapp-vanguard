import React from "react";
import { MediaItemSelectInput } from "../MediaItemSelectInput";
import { Story, createMockOnFilesSelected, createMockOpenCallback } from "./_MediaItemSelectInput.default";

export const WithProcessors: Story = {
  args: {
    isOpen: false,
    openCallback: createMockOpenCallback(),
    onFilesSelected: createMockOnFilesSelected(),
    mediaItemProcessors: [],
  },
};