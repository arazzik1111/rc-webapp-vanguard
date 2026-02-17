import React from 'react';
import {within, expect} from 'storybook/test';

import {HeaderTypes} from '@vanguard/Header';
import {PageSection, PageSectionBackground} from '../PageSection';
import type {Story} from './_PageSection.default';

export const FrostedGlass: Story = {
  render: () => (
    <PageSection
      testId="PageSection_FrostedGlass"
      background={PageSectionBackground.frostedGlass}
      headerType={HeaderTypes.sectionHeader}
      title="Frosted section"
      description="Frosted description"
    >
      <div>Body content</div>
    </PageSection>
  ),
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText('Frosted section')).toBeInTheDocument();
    await expect(canvas.getByText('Frosted description')).toBeInTheDocument();
    await expect(canvas.getByText('Body content')).toBeInTheDocument();

    const root = canvas.getByTestId('PageSection_FrostedGlass');
    await expect(root.className).toContain('frostedGlass');
  },
};