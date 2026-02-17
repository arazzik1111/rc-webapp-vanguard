import React from 'react';
import { expect, within } from 'storybook/test';

import { Button } from '@vanguard/Button';
import { HeaderTypes } from '@vanguard/Header';
import { PageSection, PageSectionBackground, PageSectionRoundedEdges } from '../PageSection';
import type { Story } from './_PageSection.default';

/**
 * Default use-cases that mirror real app usage.
 */
export const DefaultUseCases: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* 1) Full page wrapper (standalone card) */}
      <PageSection
        testId="PS_UC_Page"
        title="Connections"
        headerType={HeaderTypes.pageHeader}
        description="Manage your connected platforms."
        roundedEdges={PageSectionRoundedEdges.both}
      >
        <div>Page content</div>
      </PageSection>

      {/* 2) Stacked frosted sections (separate siblings) */}
      <div>
        <PageSection
          testId="PS_UC_StackedTop"
          background={PageSectionBackground.frostedGlass}
          roundedEdges={PageSectionRoundedEdges.top}
          title="Upcoming events"
          headerActionArea={<Button>View all</Button>}
        >
          <div>Frosted top content</div>
        </PageSection>

        <PageSection
          testId="PS_UC_StackedMiddle"
          background={PageSectionBackground.frostedGlass}
          title="Latest posts"
        >
          <div>Frosted middle content</div>
        </PageSection>

        <PageSection
          testId="PS_UC_StackedBottom"
          background={PageSectionBackground.frostedGlass}
          roundedEdges={PageSectionRoundedEdges.bottom}
          title="Insights"
        >
          <div>Frosted bottom content</div>
        </PageSection>
      </div>

      {/* 3) Grouped container with internal subsections (nested) */}
      <PageSection
        testId="PS_UC_GroupedContainer"
        roundedEdges={PageSectionRoundedEdges.both}
        title="Social"
        headerType={HeaderTypes.pageHeader}
        description="Create and manage your posts."
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <PageSection
            testId="PS_UC_GroupedInnerA"
            noDefaultPadding
            title="Latest posts"
          >
            <div>Grouped A content</div>
          </PageSection>

          <PageSection
            testId="PS_UC_GroupedInnerB"
            noDefaultPadding
            title="Insights"
          >
            <div>Grouped B content</div>
          </PageSection>
        </div>
      </PageSection>

      {/* 4) Conditional section */}
      <PageSection
        testId="PS_UC_Hidden"
        isVisible={false}
        title="Hidden"
      >
        <div>Hidden content</div>
      </PageSection>
    </div>
  ),

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 1) Full page wrapper
    await expect(canvas.getByText('Connections')).toBeInTheDocument();
    await expect(canvas.getByText('Manage your connected platforms.')).toBeInTheDocument();
    await expect(canvas.getByText('Page content')).toBeInTheDocument();

    const page = canvas.getByTestId('PS_UC_Page');
    await expect(page.className).toContain('roundedTop');
    await expect(page.className).toContain('roundedBottom');

    // 2) Stacked frosted sections
    const stackedTop = canvas.getByTestId('PS_UC_StackedTop');
    await expect(stackedTop.className).toContain('frostedGlass');
    await expect(stackedTop.className).toContain('roundedTop');
    await expect(stackedTop.className).not.toContain('roundedBottom');

    const stackedMiddle = canvas.getByTestId('PS_UC_StackedMiddle');
    await expect(stackedMiddle.className).toContain('frostedGlass');
    await expect(stackedMiddle.className).not.toContain('roundedTop');
    await expect(stackedMiddle.className).not.toContain('roundedBottom');

    const stackedBottom = canvas.getByTestId('PS_UC_StackedBottom');
    await expect(stackedBottom.className).toContain('frostedGlass');
    await expect(stackedBottom.className).toContain('roundedBottom');
    await expect(stackedBottom.className).not.toContain('roundedTop');

    await expect(canvas.getByRole('button', { name: 'View all' })).toBeInTheDocument();

    // 3) Grouped container + nested subsections
    const grouped = canvas.getByTestId('PS_UC_GroupedContainer');
    await expect(grouped.className).toContain('functionalBg');
    await expect(grouped.className).toContain('roundedTop');
    await expect(grouped.className).toContain('roundedBottom');

    const innerA = canvas.getByTestId('PS_UC_GroupedInnerA');
    await expect(innerA.className).not.toContain('defaultPadding');

    const innerB = canvas.getByTestId('PS_UC_GroupedInnerB');
    await expect(innerB.className).not.toContain('defaultPadding');

    // 4) Hidden returns null
    await expect(canvas.queryByTestId('PS_UC_Hidden')).not.toBeInTheDocument();
    await expect(canvas.queryByText('Hidden content')).not.toBeInTheDocument();
  },
};