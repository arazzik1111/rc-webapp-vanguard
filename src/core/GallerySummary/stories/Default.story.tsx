import React from "react";
import { within, expect } from "storybook/test";
import { Story } from "./_GallerySummary.default";
import { GallerySummary } from "../GallerySummary";

const mockMediaItems = [
  {
    publicUrl: "https://picsum.photos/3000/4000",
    objectType: "MediaItemFile" as const,
  },
  {
    publicUrl: "https://picsum.photos/301/401",
    objectType: "MediaItemFile" as const,
  },
  {
    publicUrl: "https://picsum.photos/302/402",
    objectType: "MediaItemFile" as const,
  },
  {
    publicUrl: "https://picsum.photos/303/403",
    objectType: "MediaItemFile" as const,
  },
  {
    publicUrl: "https://picsum.photos/304/404",
    objectType: "MediaItemFile" as const,
  },
];

export const Default: Story = {
  render: () => <GallerySummary mediaItems={mockMediaItems} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Check that the component renders something
    const anyElement = canvasElement.querySelector('*');
    await expect(anyElement).toBeInTheDocument();
  },
};