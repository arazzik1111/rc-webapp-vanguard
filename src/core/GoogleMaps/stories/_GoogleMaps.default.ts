import { StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { GoogleMaps } from '../GoogleMaps';

export type Story = StoryObj<typeof GoogleMaps>;

export const createMockOnLoad = () => fn();

export const waitForMapLoad = (ms: number = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

export const testMapCenter = {
  lat: 40.7128,
  lng: -74.006,
};

export const testMapZoom = 10;

export const testMapOptions = {
  center: testMapCenter,
  zoom: testMapZoom,
};
