import { StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { CheckBox } from '../CheckBox';

export type Story = StoryObj<typeof CheckBox>;

export const createMockOnChange = () => fn();

export const waitForDebounce = (ms: number = 100) => new Promise((resolve) => setTimeout(resolve, ms));

export const testLabels = {
  default: 'Default Checkbox',
  checked: 'Checked Checkbox',
  disabled: 'Disabled Checkbox',
  intermediate: 'Intermediate Checkbox',
  withBackground: 'Checkbox with Background',
} as const;

export const testColors = {
  red: '#ff0000',
  blue: '#0000ff',
  green: '#00ff00',
} as const;

export const selectors = {
  checkbox: 'input[type="checkbox"]',
  label: '.vanguard-checkbox-label',
  container: '.vanguard-checkbox-container',
} as const;

// Re-export for convenience

export { useCheckboxFormConfig } from './bootstrap/Checkbox.form-config';
export { CheckBoxSlice, checkBoxStore } from './bootstrap/CheckBox.slice';
