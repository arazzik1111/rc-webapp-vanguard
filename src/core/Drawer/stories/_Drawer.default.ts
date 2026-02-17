import { StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { Drawer } from '../Drawer';

export type Story = StoryObj<typeof Drawer>;

export const createMockOnClose = () => fn();

export const testContent = 'Drawer content for testing';

export const testZIndex = 1200;
