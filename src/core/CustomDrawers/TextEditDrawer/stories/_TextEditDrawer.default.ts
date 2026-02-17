import { StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { TextEditDrawer } from '../TextEditDrawer';

export type Story = StoryObj<typeof TextEditDrawer>;

export const createMockOnSave = () => fn();
export const createMockOnClose = () => fn();

export const testValue = 'Edit me please!';
export const testDefaultValue = 'This is the default value';
export const testTitle = 'Edit the value of that box';
export const testDescription = "There's no need for this description, but here it is regardless.";
export const testMaxLength = 400;
