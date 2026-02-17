import React from "react";
import { within, expect } from "storybook/test";
import { Story, createMockClose, createMockSave, sampleImageBlob } from "./_Cropper.default";

export const Default: Story = {
  args: {
    imageFile: sampleImageBlob,
    close: createMockClose(),
    save: createMockSave(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // The modal should be rendered
    const heading = canvas.getByText("Crop your photo");
    await expect(heading).toBeInTheDocument();
  },
};