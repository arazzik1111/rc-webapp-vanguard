import { disableControls, SbDecorator } from '@test-utils/get-storybook-decorator';
import React from 'react';
import { StoryObj } from '@storybook/react';
import { ListPageHeaderWithActions } from '@common/ListPage/ListPageHeaderWithActions/ListPageHeaderWithActions';
import { within } from 'storybook/test';

export default {
  ...SbDecorator({
    title: 'common/ListPage/ListPageHeaderWithActions',
    component: ListPageHeaderWithActions,
    extra: {
      argTypes: {
        ...disableControls(['']),
      },
    },
  }),
};

type Story = StoryObj<typeof ListPageHeaderWithActions>;

export const _ListPageHeaderWithActionsDefault: Story = {
  args: {
    title: 'Planner',
    subTitle: 'Plan, schedule, and track your posts.',
    Card: () => null,
    dataLength: 0,
    hasMore: false,
    testId: 'default-list-page',
    nextFunction: () => {
    },
    refreshFunction: () => {
    },
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
  },
};
