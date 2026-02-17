
import { CheckBoxIcon, CheckBoxIconProps } from "./CheckBoxIcon";
import React from "react";
import {disableControls, SbDecorator} from "@test-utils/get-storybook-decorator";
import { StoryObj } from "@storybook/react";
import { fn, userEvent, within, expect, screen } from "@storybook/test";

export default {
  ...SbDecorator({
    title: "Vanguard/CheckBox/CheckBoxIcon",
    component: CheckBoxIcon,
      extra: {
      ...disableControls([""]),
    },
  }),
};

/**
* We create the story type referencing its component
*/
type Story = StoryObj<typeof CheckBoxIcon>;

export const CheckBoxIconStory:Story = {
  args:{},
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
  },
}
