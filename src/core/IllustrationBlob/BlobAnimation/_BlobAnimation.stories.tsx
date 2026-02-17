
import { BlobAnimation, BlobAnimationProps } from "./BlobAnimation";
import React from "react";
import {disableControls, SbDecorator} from "@test-utils/get-storybook-decorator";
import { StoryObj } from "@storybook/react";
import { fn, userEvent, within, expect, screen } from "storybook/test";

export default {
  ...SbDecorator({
    title: "Vanguard/IllustrationBlob/BlobAnimation",
    component: BlobAnimation,
      extra: {
      ...disableControls([""]),
    },
  }),
};

/**
* We create the story type referencing its component
*/
type Story = StoryObj<typeof BlobAnimation>;

export const BlobAnimationStory:Story = {
  args:{},
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
  },
}
