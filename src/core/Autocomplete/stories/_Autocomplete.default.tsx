import { StoryObj } from '@storybook/react';
import { FlagAdornment } from '@vanguard/FlagAdornment/FlagAdornment';

import { Autocomplete } from '../Autocomplete';

export type Story = StoryObj<typeof Autocomplete>;

export const testOptions = [
  { key: 0, value: 'apple', title: 'Apple' },
  { key: 1, value: 'plum', title: 'Plum' },
  { key: 2, value: 'cherry', title: 'Cherry' },
  { key: 3, value: 'banana', title: 'Banana' },
  { key: 4, value: 'orange', title: 'Orange' },
];

export const countriesList = [
  { key: 0, value: 'USA', title: 'USA' },
  { key: 1, value: 'Spain', title: 'Spain' },
  { key: 2, value: 'Mexico', title: 'Mexico' },
  { key: 3, value: 'France', title: 'France' },
  { key: 4, value: 'Germany', title: 'Germany' },
];

export const adornmentIcons = [
  <FlagAdornment key={0} countryCode={'us'} />,
  <FlagAdornment key={1} countryCode={'es'} />,
  <FlagAdornment key={2} countryCode={'mx'} />,
  <FlagAdornment key={3} countryCode={'fr'} />,
  <FlagAdornment key={4} countryCode={'de'} />,
];

export const simpleStringOptions = ['Apple', 'Plum', 'Cherry', 'Banana', 'Orange'];

export const waitForDebounce = (ms: number = 100) => new Promise((resolve) => setTimeout(resolve, ms));
