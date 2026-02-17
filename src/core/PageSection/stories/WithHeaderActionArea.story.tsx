import React from 'react';
import { within, expect } from 'storybook/test';

import { HeaderTypes } from '@vanguard/Header';
import { Button } from '@vanguard/Button';
import { PageSection } from '../PageSection';
import type { Story } from './_PageSection.default';

export const WithHeaderActionArea: Story = {
  render: () => (
    <PageSection
      testId="PageSection_WithHeaderActionArea"
      headerType={HeaderTypes.sectionHeader}
      title="Upcoming events"
      description="Some description"
      headerActionArea={<Button>View all</Button>}
    >
      <div>Body content</div>
    </PageSection>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Upcoming events')).toBeInTheDocument();
    await expect(canvas.getByRole('button', { name: 'View all' })).toBeInTheDocument();
    await expect(canvas.getByText('Body content')).toBeInTheDocument();
  },
};