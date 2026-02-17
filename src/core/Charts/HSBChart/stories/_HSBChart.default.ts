import { StoryObj } from '@storybook/react';

import { HSBChart, HSBChartProps, HSBChartSeries } from '../HSBChart';

// Required Story type export
export type Story = StoryObj<typeof HSBChart>;

// Test data constants
export const testSeries: HSBChartSeries[] = [
  {
    name: 'Photos added by owner',
    data: [1, 20],
    color: 'var(--brand-color)',
  },
  {
    name: 'Photos added by customers',
    data: [10, 16],
    color: 'var(--a2900)',
  },
];

export const testCategories = ['Greniere Brasserie', 'Immediate competition'];

export const testPreviousSeries: HSBChartSeries[] = [
  {
    name: 'Photos added by owner',
    data: [5, 15],
    color: 'var(--brand-color)',
  },
  {
    name: 'Photos added by customers',
    data: [8, 12],
    color: 'var(--a2900)',
  },
];

// Common selectors
export const selectors = {
  chart: '.hsb-chart-container',
  bigLegend: "[data-testid*='_BigLegend']",
} as const;

// Excluded controls for Storybook
export const HSBCHART_EXCLUDED_CONTROLS_DEFAULT = ['testId', 'renderBigLegendFn'];

// Default props for stories
export const defaultProps: HSBChartProps = {
  series: testSeries,
  categories: testCategories,
  height: '250px',
  showBigLegend: true,
  isLoading: false,
  showLegend: false,
  isStacked: true,
  hasPercentageXaxis: false,
};

// Storybook argTypes configuration
export const hsbChartArgTypes = {
  series: {
    control: 'object',
    defaultValue: testSeries,
  },
  categories: {
    control: 'object',
    defaultValue: testCategories,
  },
  height: {
    control: { type: 'text' },
    defaultValue: '250px',
  },
  showBigLegend: {
    control: 'boolean',
    defaultValue: true,
  },
  isLoading: {
    control: 'boolean',
    defaultValue: false,
  },
  showLegend: {
    control: 'boolean',
    defaultValue: false,
  },
  isStacked: {
    control: 'boolean',
    defaultValue: true,
  },
  hasPercentageXaxis: {
    control: 'boolean',
    defaultValue: false,
  },
};
