import { StoryObj } from '@storybook/react';
import { IconNames } from '@vanguard/Icon/IconNames';
import { Text, TextTypes } from '@vanguard/Text/Text';
import { fn } from 'storybook/test';

import { List } from '../List';

export type Story = StoryObj<typeof List>;

export const createMockOnShowMore = () => fn();
export const createMockOnShowLess = () => fn();

export const sampleListElements = [
  {
    content: (
      <Text type={TextTypes.textCaption} color={'var(--n500)'}>
        First item
      </Text>
    ),
    selected: true,
  },
  {
    content: (
      <Text type={TextTypes.heading2} color={'var(--n700)'}>
        Second item
      </Text>
    ),
    selected: false,
  },
  {
    content: <Text type={TextTypes.textHelp}>Third item</Text>,
    selected: true,
  },
];

export const extendedListElements = [
  { content: 'First element', selected: true },
  { content: 'Second element', selected: false },
  { content: 'Third element', selected: true },
  { content: 'Fourth element', selected: false },
  { content: 'Fifth element', selected: false },
  { content: 'Sixth element', selected: false },
  { content: 'Seventh element', selected: false },
];

export const listElementsWithIcons = [
  {
    content: 'Item with icon',
    iconName: IconNames.check,
    selected: false,
  },
  {
    content: 'Selected item with icon',
    iconName: IconNames.star,
    selected: true,
  },
];

export const testTitle = 'Sample List Title';
export const testHeaderNote = 'This is a header note';
export const testFooterNote = 'This is a footer note';
export const testLimit = 3;
