import React from 'react';
import {within, expect} from 'storybook/test';

import {PageSection} from '../PageSection';
import type {Story} from './_PageSection.default';

export const Default: Story = {
  render: () => (
    <PageSection testId="PageSection_Default">
      <div>Body content</div>
    </PageSection>
  ),
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Body content')).toBeInTheDocument();
    await expect(canvas.getByTestId('PageSection_Default_Children')).toBeInTheDocument();

    // Default contract: defaultPadding is applied when noDefaultPadding is not set
    const root = canvas.getByTestId('PageSection_Default');
    await expect(root.className).toContain('defaultPadding');

    // Default contract: functionalBg class applied by default
    await expect(root.className).toContain('functionalBg');
  },
};