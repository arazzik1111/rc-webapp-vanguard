import { StoryObj } from '@storybook/react';

import { FlagAdornment } from '../FlagAdornment';

export type Story = StoryObj<typeof FlagAdornment>;

export const testCountryCodes = {
  germany: 'de',
  unitedStates: 'us',
  france: 'fr',
} as const;
