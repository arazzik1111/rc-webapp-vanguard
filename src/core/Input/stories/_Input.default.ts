import { StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { Input } from '../Input';

export type Story = StoryObj<typeof Input>;

export const createMockOnChange = () => fn();
export const createMockOnFocus = () => fn();
export const createMockOnBlur = () => fn();

export const testValues = {
  text: 'Sample text',
  number: 42,
  email: 'test@example.com',
  password: 'password123',
  date: '2023-10-16',
} as const;

export const testPlaceholders = {
  default: 'Enter value',
  email: 'Enter email address',
  search: 'Search...',
} as const;

export const testLabels = {
  simple: 'Label',
  long: 'This is a very long label that should wrap to the next line if it exceeds the width of the input field',
  withReplacements: 'Field {field_name}',
} as const;

export const testReplacements = {
  field_name: 'Name',
} as const;

export const selectors = {
  input: 'input[type="text"]',
  numberInput: 'input[type="number"]',
  emailInput: 'input[type="email"]',
  passwordInput: 'input[type="password"]',
  dateInput: 'input[type="date"]',
} as const;
