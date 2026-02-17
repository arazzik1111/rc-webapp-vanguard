import { StoryObj } from '@storybook/react';
import React from 'react';
import { Drawer } from '../Drawer';

export type Story = StoryObj<typeof Drawer>;

export const DRAWER_EXCLUDED_CONTROLS_DEFAULT = ['onClose', 'outOfTheWay'];

// Wide and Tall demo components used as Drawer children
export const WideContent: React.FC = () => (
  <div style={{ width: 1200, padding: 16, background: '#f3f4f6' }}>
    <p>Wide content area (1200px wide). Add your content here.</p>
    <div style={{ height: 200, background: '#e5e7eb' }} />
  </div>
);

export const TallContent: React.FC = () => (
  <div style={{ height: 1200, width: 400, padding: 16, background: '#fdf2f8' }}>
    <p>Tall content area (1200px tall). Scroll to view more content.</p>
    <div style={{ height: 1000, background: '#fce7f3' }} />
  </div>
);
