import { within, expect } from "storybook/test";
import { Story, createMockOnFileDrop } from "./_DragAndDropFile.default";

export const Default: Story = {
  args: {
    onFileDrop: createMockOnFileDrop(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropzone = canvas.getByText("Drag and drop files here");
    await expect(dropzone).toBeInTheDocument();
  },
};