
import React from "react";
import { GalleryMediaItem } from "./GalleryMediaItem";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { StoryObj } from "@storybook/react";
import { fn, userEvent, within, expect, screen } from "storybook/test";
import { ContentType } from "@vanguard/Documents/Document.types";


export default {
  ...SbDecorator({
    title: "vanguard/GalleryMediaItem",
    component: GalleryMediaItem,
    extra: {
      ...disableControls([""]),
    },
  }),
};

/**
* We create the story type referencing its component
*/
type Story = StoryObj<typeof GalleryMediaItem>;

export const Image: Story = {
  args: {
    mediaItem: {
      publicUrl: "https://picsum.photos/300/400",
      fileType: ContentType.IMAGE_JPEG,
      objectType: "MediaItemFile",
    }
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
  },
}

export const Video: Story = {
  args: {
    mediaItem: {
      publicThumbnailUrl: "https://picsum.photos/300/400",
      fileType: ContentType.VIDEO_MP4,
      metadata: {
        videoMetadata: {
          duration: 100,
          width: 1920,
          height: 1080,
        }
      },
      objectType: "MediaItemFile",
    }
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
  },
}
