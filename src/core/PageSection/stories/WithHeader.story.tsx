import React from 'react';
import { within, expect } from 'storybook/test';

import { HeaderTypes } from '@vanguard/Header';
import { PageSection } from '../PageSection';
import type { Story } from './_PageSection.default';

const headerTypesInOrder: HeaderTypes[] = [
  HeaderTypes.pageHeader,
  HeaderTypes.drawerHeader,
  HeaderTypes.compactDrawerHeader,
  HeaderTypes.sectionHeader,
  HeaderTypes.compactSectionHeader,
];

export const WithHeader: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {headerTypesInOrder.map((type) => (
        <PageSection
          key={type}
          testId={`PageSection_WithHeader_${type}`}
          headerType={type}
          title={`Title (${type})`}
          description={`Description (${type})`}
        >
          <div>{`Body content (${type})`}</div>
        </PageSection>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    for (const type of headerTypesInOrder) {
      await expect(canvas.getByText(`Title (${type})`)).toBeInTheDocument();
      await expect(canvas.getByText(`Description (${type})`)).toBeInTheDocument();
      await expect(canvas.getByText(`Body content (${type})`)).toBeInTheDocument();

      // Ensure PageSection passes testId through consistently
      await expect(canvas.getByTestId(`PageSection_WithHeader_${type}`)).toBeInTheDocument();

      // Header component testId convention: `${testId}_Header`
      // NOTE: this currently becomes "undefined_Header" if testId is missing in Header,
      // but here we always provide it.
      await expect(canvas.getByTestId(`PageSection_WithHeader_${type}_Header`)).toBeInTheDocument();
    }
  },
};