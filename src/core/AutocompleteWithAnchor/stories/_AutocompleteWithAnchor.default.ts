import { StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { AutocompleteWithAnchor } from '../AutocompleteWithAnchor';

export type Story = StoryObj<typeof AutocompleteWithAnchor>;

export const createMockOnOpenChange = () => fn();

export const testOptions = ['Option 1', 'Option 2', 'Option 3'] as const;
