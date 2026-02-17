import React from 'react';
import { within, expect } from 'storybook/test';

import { PageSection } from '../PageSection';
import type { Story } from './_PageSection.default';

export const NoDefaultPadding: Story = {
  render: () => (
    <PageSection testId="PageSection_NoDefaultPadding" noDefaultPadding>
      <div>Body content</div>
    </PageSection>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Body content')).toBeInTheDocument();

    // Contract: defaultPadding not present
    const root = canvas.getByTestId('PageSection_NoDefaultPadding');
    await expect(root.className).not.toContain('defaultPadding');
  },
};