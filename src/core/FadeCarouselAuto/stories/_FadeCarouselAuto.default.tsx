import { StoryObj } from '@storybook/react';

import { FadeCarouselAuto } from '../FadeCarouselAuto';

export type Story = StoryObj<typeof FadeCarouselAuto>;

export const sampleItems = [
  { id: 1, title: 'Item 1', color: 'red' },
  { id: 2, title: 'Item 2', color: 'blue' },
  { id: 3, title: 'Item 3', color: 'green' },
  { id: 4, title: 'Item 4', color: 'yellow' },
  { id: 5, title: 'Item 5', color: 'purple' },
];

export const SampleItemComponent: React.FC<{ id: number; title: string; color: string }> = ({ title, color }) => (
  <div
    style={{
      width: '200px',
      height: '100px',
      backgroundColor: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '18px',
    }}
  >
    {title}
  </div>
);
