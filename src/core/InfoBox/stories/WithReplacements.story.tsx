import React from 'react';
import { InfoBox } from '../InfoBox';
import { Story, selectors } from './_InfoBox.default';
import { within, expect } from 'storybook/test';

export const WithReplacements: Story = {
  args: {
    title: 'InfoBox Title',
    description: 'This is a <strong>test</strong> description with replacements.',
    replacements: {
      // @ts-ignore //TODO FIXME!
      strong: (text: any) => <strong key={text}>{text}</strong>,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('InfoBox Title')).toBeInTheDocument();
    const description = canvas.getByTestId('info-box-description');
    await expect(description).toHaveTextContent('This is a test description with replacements.');
  },
};
