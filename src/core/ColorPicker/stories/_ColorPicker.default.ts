import { StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { ColorPickerProps } from '../ColorPicker';

export type Story = StoryObj<ColorPickerProps>;

// Common mock functions that can be reused across stories
export const createMockColorChange = () => {
  return fn();
};

// Common test utilities
export const waitForDebounce = (ms: number = 100) => new Promise((resolve) => setTimeout(resolve, ms));

// Common test data
export const testColors = {
  red: '#ff0000',
  green: '#00ff00',
  blue: '#0000ff',
  purple: '#9c27b0',
  orange: '#ff6b6b',
  yellow: '#ffff00',
  cyan: '#00ffff',
  magenta: '#ff00ff',
  darkGreen: '#4caf50',
  darkBlue: '#3366cc',
} as const;

// Common test selectors
export const selectors = {
  colorInput: 'input[type="color"]',
  textInput: 'input[type="text"]',
} as const;

// Re-export for convenience

export { useColorPickerFormConfig } from './bootstrap/colorpicker.form-config';
export { ColorPickerSlice, colorPickerStore } from './bootstrap/colorpicker.test.slice';
