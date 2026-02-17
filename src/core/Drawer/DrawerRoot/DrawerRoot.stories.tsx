
import { DrawerRoot } from "./DrawerRoot";
import React from "react";
import {disableControls, SbDecorator} from "@test-utils/get-storybook-decorator";
import { StoryObj } from "@storybook/react";
import { fn, userEvent, within, expect, screen } from "@storybook/test";

export default {
  ...SbDecorator({
    title: "Vanguard/Drawer/DrawerRoot",
    component: DrawerRoot,
      extra: {
      ...disableControls([""]),
    },
  }),
};

/**
* We create the story type referencing its component
*/
type Story = StoryObj<typeof DrawerRoot>;

export const DrawerRootStory:Story = {
  args:{},
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
  },
}
