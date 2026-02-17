import React from 'react';
import { disableControls, SbDecorator } from '@test-utils/get-storybook-decorator';
import { StoryObj } from '@storybook/react';
import { ListPageHeader } from '@common/ListPage/ListPageHeaderWithActions/ListPageHeader/ListPageHeader';
import { IconNames } from '@vanguard/Icon';

export default {
  ...SbDecorator({
    title: 'common/ListPage/ListPageHeaderWithActions/ListPageHeader',
    component: ListPageHeader,
    extra: {
      ...disableControls(['']),
    },
    opts: {
      fullScreen: true,
    },
  }),
};

type Story = StoryObj<typeof ListPageHeader>;

export const Default: Story = {
  args: {
    testId: 'list-page-header-default',
    title: 'My Header Title',
    subTitle: 'Subtitle here',
    reducer: () => ({ initialLoad: false }),
    action: {
      text: 'Click me',
      cta: () => alert('Button clicked!'),
      iconLeft: IconNames.arrowLeft,
    },
    headerAdditionalInformation: <div>Additional info area</div>,
    headerCustomSection: <div>Some custom section content</div>,
    headerHideShadow: false,
  },
};

export const NoAction: Story = {
  args: {
    testId: 'list-page-header-no-action',
    title: 'Header Without Action',
    subTitle: 'Just a subtitle, no button.',
    reducer: () => ({ initialLoad: false }),
    // No `action` prop => the `headerAdditionalInformation` is shown instead
    headerAdditionalInformation: <div>Additional info only</div>,
  },
};

export const LoadingState: Story = {
  args: {
    testId: 'list-page-header-loading',
    title: 'Loading Header',
    subTitle: 'Will hide custom sections when loading.',
    reducer: () => ({ initialLoad: true }),
    headerCustomSection: <div>This won't display while `initialLoad` is true</div>,
  },
};
