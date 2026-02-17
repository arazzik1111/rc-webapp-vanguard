import { ContentType } from "@vanguard/Documents/Document.types";
import { createMockOnFilesSelected, createMockOpenCallback, Story } from "./_MediaItemSelectInput.default";

export const WithAccept: Story = {
  args: {
    isOpen: false,
    openCallback: createMockOpenCallback(),
    onFilesSelected: createMockOnFilesSelected(),
    accept: [ContentType.FILE_ANY],
  },
};