import { StoryObj } from '@storybook/react';

import { Slider, SliderProps } from '../Slider';

// Required Story type export
export type Story = StoryObj<typeof Slider>;

// Test utilities
export const waitForDebounce = (ms: number = 100) => new Promise((resolve) => setTimeout(resolve, ms));

// Test data constants
export const testMarks: { value: number; label: string }[] = [
  { value: 0, label: '0' },
  { value: 25, label: '25' },
  { value: 50, label: '50' },
  { value: 75, label: '75' },
  { value: 100, label: '100' },
];

export const testValues = {
  default: 50,
  min: 0,
  max: 100,
  step: 1,
} as const;

// Common selectors
export const selectors = {
  slider: '[role="slider"]',
  sliderTrack: '.MuiSlider-track',
  sliderThumb: '.MuiSlider-thumb',
  sliderRail: '.MuiSlider-rail',
  valueLabel: '.MuiSlider-valueLabel',
} as const;

// Excluded controls for Storybook
export const SLIDER_EXCLUDED_CONTROLS_DEFAULT = [
  'testId',
  'className',
  'targetRef',
  'formconfig',
  'externalControlled',
  'onChange',
  'onChangeCommitted',
];

// Default props for stories
export const defaultProps: SliderProps = {
  value: testValues.default,
  min: testValues.min,
  max: testValues.max,
  step: testValues.step,
};

// Storybook argTypes configuration
export const sliderArgTypes = {
  value: {
    control: { type: 'number', min: 0, max: 100, step: 1 },
    defaultValue: testValues.default,
  },
  min: {
    control: { type: 'number' },
    defaultValue: testValues.min,
  },
  max: {
    control: { type: 'number' },
    defaultValue: testValues.max,
  },
  step: {
    control: { type: 'number', min: 1 },
    defaultValue: testValues.step,
  },
  marks: {
    control: 'object',
    defaultValue: undefined,
  },
  disabled: {
    control: 'boolean',
    defaultValue: false,
  },
  valueLabelDisplay: {
    control: { type: 'radio' },
    options: ['auto', 'on', 'off'],
    defaultValue: 'off',
  },
  type: {
    control: { type: 'radio' },
    options: ['default', 'simple', 'primary'],
    defaultValue: 'default',
  },
  size: {
    control: { type: 'radio' },
    options: ['default', 'small'],
    defaultValue: 'default',
  },
};
