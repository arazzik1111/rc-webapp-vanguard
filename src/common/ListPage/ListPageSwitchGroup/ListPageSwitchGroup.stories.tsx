import { ListPageSwitchGroup } from './ListPageSwitchGroup';
import React from 'react';
import { disableControls, SbDecorator } from '@test-utils/get-storybook-decorator';
import { StoryObj } from '@storybook/react';
import { within } from 'storybook/test';

export default {
  ...SbDecorator({
    title: 'BuildingBlocks/ListPage/ListPageSwitchGroup',
    component: ListPageSwitchGroup,
    extra: {
      ...disableControls(['']),
    },
  }),
};

/**
 * We create the story type referencing its component
 */
type Story = StoryObj<typeof ListPageSwitchGroup>;

export const ListPageSwitchGroupStory: Story = {
  args: {},
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
  },
};
