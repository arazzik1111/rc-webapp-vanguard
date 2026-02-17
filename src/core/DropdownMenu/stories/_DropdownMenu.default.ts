import { StoryObj } from '@storybook/react';
import { IconNames } from '@vanguard/Icon/IconNames.ts';
import { fn } from 'storybook/test';

import { DropdownMenu } from '../DropdownMenu';

export type Story = StoryObj<typeof DropdownMenu>;

export const createMockToggle = () => fn();

export const defaultItems = [
  { title: 'Change image', onClick: fn() },
  { title: 'Remove', onClick: fn() },
];

export const itemsWithIcons = [
  { title: 'Edit', iconName: IconNames.edit as const, onClick: fn() },
  { title: 'Delete', iconName: IconNames.trash as const, onClick: fn() },
];
