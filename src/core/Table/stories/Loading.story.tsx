import React from 'react';
import { Story, defaultProps } from './_Table.default';
import { within, expect } from 'storybook/test';

export const Loading: Story = {
  args: {
    ...defaultProps,
    isLoading: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // When loading, the table should NOT be rendered
    const table = canvas.queryByRole('table');
    await expect(table).toBeNull();

    // Placeholder/skeletons should be visible instead
    // TablePlaceholder uses Skeleton which has data-testid="Skeleton"
    const skeletons = canvas.getAllByTestId('Skeleton');
    await expect(skeletons.length).toBeGreaterThan(0);
  },
};
