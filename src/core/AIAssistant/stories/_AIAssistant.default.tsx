import { StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { AIAssistant } from '../AIAssistant';

export type Story = StoryObj<typeof AIAssistant>;

export const createMockGenerateCallback = () => fn().mockResolvedValue('Generated text from AI');

export const createMockAdjustCallback = () => fn().mockResolvedValue('Adjusted text from AI');

export const createMockOnKeepCallback = () => fn();
export const createMockOnCloseCallback = () => fn();
export const createMockOnPanelStatusChange = () => fn();

export const mockKeywords = [
  { id: 1, name: 'keyword1', objectType: 'App\\Domain\\Common\\Entities\\Keywords\\Keyword' },
  { id: 2, name: 'keyword2', objectType: 'App\\Domain\\Common\\Entities\\Keywords\\Keyword' },
];

export const Container = (props: { children: React.ReactNode }) => {
  return (
    <div style={{ minWidth: '600px', maxWidth: '800px', width: '100%', minHeight: '500px' }}>{props.children}</div>
  );
};
