import React from "react";
import { within, expect } from "storybook/test";
import { Story } from "./_Gallery.default";
import { Gallery, MediaItemFile } from "../Gallery";

const mockMediaItems: MediaItemFile[] = [
  {
    uuid: "1",
    publicUrl: "https://via.placeholder.com/300x200?text=Image+1",
    mediaItemName: "image1.jpg",
    objectType: "mediaItem",
  },
  {
    uuid: "2",
    publicUrl: "https://via.placeholder.com/300x200?text=Image+2",
    mediaItemName: "image2.jpg",
    objectType: "mediaItem",
  },
];

export const Default: Story = {
  render: () => (
    <Gallery
      mediaItems={mockMediaItems}
      editMode={false}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Check that gallery container is present
    const galleryContainer = document.querySelector('.gallery-container');
    await expect(galleryContainer).toBeInTheDocument();
  },
};