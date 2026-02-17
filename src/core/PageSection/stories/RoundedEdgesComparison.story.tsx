import React from 'react';
import {within, expect} from 'storybook/test';

import {HeaderTypes} from '@vanguard/Header';
import {PageSection, PageSectionBackground, PageSectionRoundedEdges} from '../PageSection';
import type {Story} from './_PageSection.default';

export const RoundedEdgesComparison: Story = {
  render: () => (
    <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
      {/* Frosted */}
      <PageSection
        testId="PS_Frosted_RoundedTop"
        background={PageSectionBackground.frostedGlass}
        roundedEdges={PageSectionRoundedEdges.top}
        headerType={HeaderTypes.sectionHeader}
        title="Frosted · Rounded top"
      >
        <div>Content</div>
      </PageSection>

      <PageSection
        testId="PS_Frosted_RoundedNone"
        background={PageSectionBackground.frostedGlass}
        headerType={HeaderTypes.sectionHeader}
        title="Frosted · None"
      >
        <div>Content</div>
      </PageSection>

      <PageSection
        testId="PS_Frosted_RoundedBottom"
        background={PageSectionBackground.frostedGlass}
        roundedEdges={PageSectionRoundedEdges.bottom}
        headerType={HeaderTypes.sectionHeader}
        title="Frosted · Rounded bottom"
      >
        <div>Content</div>
      </PageSection>

      <PageSection
        testId="PS_Frosted_RoundedBoth"
        background={PageSectionBackground.frostedGlass}
        roundedEdges={PageSectionRoundedEdges.both}
        headerType={HeaderTypes.sectionHeader}
        title="Frosted · Rounded both"
      >
        <div>Content</div>
      </PageSection>

      {/* functionalBg */}
      <PageSection
        testId="PS_Default_RoundedTop"
        roundedEdges={PageSectionRoundedEdges.top}
        headerType={HeaderTypes.pageHeader}
        title="Default · Rounded top"
      >
        <div>Content</div>
      </PageSection>

      <PageSection
        testId="PS_Default_RoundedNone"
        headerType={HeaderTypes.pageHeader}
        title="Default · None"
      >
        <div>Content</div>
      </PageSection>

      <PageSection
        testId="PS_Default_RoundedBottom"
        roundedEdges={PageSectionRoundedEdges.bottom}
        headerType={HeaderTypes.pageHeader}
        title="Default · Rounded bottom"
      >
        <div>Content</div>
      </PageSection>

      <PageSection
        testId="PS_Default_RoundedBoth"
        roundedEdges={PageSectionRoundedEdges.both}
        headerType={HeaderTypes.pageHeader}
        title="Default · Rounded both"
      >
        <div>Content</div>
      </PageSection>
    </div>
  ),

  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);

    const frostedTop = canvas.getByTestId('PS_Frosted_RoundedTop');
    await expect(frostedTop.className).toContain('roundedTop');
    await expect(frostedTop.className).not.toContain('roundedBottom');

    const frostedNone = canvas.getByTestId('PS_Frosted_RoundedNone');
    await expect(frostedNone.className).not.toContain('roundedTop');
    await expect(frostedNone.className).not.toContain('roundedBottom');

    const frostedBottom = canvas.getByTestId('PS_Frosted_RoundedBottom');
    await expect(frostedBottom.className).toContain('roundedBottom');
    await expect(frostedBottom.className).not.toContain('roundedTop');

    const frostedBoth = canvas.getByTestId('PS_Frosted_RoundedBoth');
    await expect(frostedBoth.className).toContain('roundedTop');
    await expect(frostedBoth.className).toContain('roundedBottom');

    const defaultTop = canvas.getByTestId('PS_Default_RoundedTop');
    await expect(defaultTop.className).toContain('roundedTop');
    await expect(defaultTop.className).not.toContain('roundedBottom');

    const defaultNone = canvas.getByTestId('PS_Default_RoundedNone');
    await expect(defaultNone.className).not.toContain('roundedTop');
    await expect(defaultNone.className).not.toContain('roundedBottom');

    const defaultBottom = canvas.getByTestId('PS_Default_RoundedBottom');
    await expect(defaultBottom.className).toContain('roundedBottom');
    await expect(defaultBottom.className).not.toContain('roundedTop');

    const defaultBoth = canvas.getByTestId('PS_Default_RoundedBoth');
    await expect(defaultBoth.className).toContain('roundedTop');
    await expect(defaultBoth.className).toContain('roundedBottom');
  },
};