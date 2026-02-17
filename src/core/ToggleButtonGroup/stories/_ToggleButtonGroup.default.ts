import { StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { ToggleButtonGroup } from '../ToggleButtonGroup';

export type Story = StoryObj<typeof ToggleButtonGroup>;

export const mockOnChange = fn();
