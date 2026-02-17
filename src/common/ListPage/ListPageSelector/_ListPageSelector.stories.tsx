import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { StoryObj } from "@storybook/react";
import { ListPageSelector } from "@common/ListPage/ListPageSelector/ListPageSelector";

export default {
  ...SbDecorator({
    title: "common/ListPage/ListPageSelector",
    component: () => <></>,
    extra: {
      ...disableControls([""]),
    },
    opts: {
      withRedux: true,
    },
  }),
};

/**
 * We create the story type referencing its component
 */
type Story = StoryObj<typeof ListPageSelector>;

export const ListPageSelectorStory: Story = {};
