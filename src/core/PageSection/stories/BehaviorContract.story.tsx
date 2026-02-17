import React from 'react';
import {within, expect} from 'storybook/test';

import {Button} from '@vanguard/Button';
import {PageSection, PageSectionBackground, PageSectionRoundedEdges} from '../PageSection';
import type {Story} from './_PageSection.default';

/**
 * PageSection behavior contract.
 * Covers invariants that must never break.
 */
export const BehaviorContract: Story = {
  render: () => {
    const refSpy = (node?: Element | null) => {
      (window as any).__ps_ref_node__ = node;
    };

    return (
      <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
        {/* A) No testId -> must not create undefined_Children */}
        <PageSection title="No testId title">
          <div>No testId body</div>
        </PageSection>

        {/* B) Action-only (no title) -> header row renders, action renders, no header component */}
        <PageSection
          testId="PS_ActionOnly"
          headerActionArea={<Button>Action</Button>}
        >
          <div>ActionOnly body</div>
        </PageSection>

        {/* C) testId -> children testId suffix must exist */}
        <PageSection testId="PS_ChildrenSuffix">
          <div>ChildrenSuffix body</div>
        </PageSection>

        {/* D) className merging */}
        <PageSection testId="PS_ClassName" className="my-extra-class">
          <div>ClassName body</div>
        </PageSection>

        {/* E) innerRef callback receives node */}
        <PageSection testId="PS_InnerRef" innerRef={refSpy}>
          <div>InnerRef body</div>
        </PageSection>

        {/* F) background class mapping + roundedEdges class mapping are additive */}
        <PageSection
          testId="PS_Classes"
          background={PageSectionBackground.frostedGlass}
          roundedEdges={PageSectionRoundedEdges.both}
          title="Classes"
        >
          <div>Classes body</div>
        </PageSection>
      </div>
    );
  },

  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);

    // A) No testId: no undefined_Children artifact
    await expect(canvas.getByText('No testId title')).toBeInTheDocument();
    await expect(canvas.getByText('No testId body')).toBeInTheDocument();
    await expect(canvas.queryByTestId('undefined_Children')).not.toBeInTheDocument();

    // B) Action-only must render action area and body, and should NOT render Header test id
    await expect(canvas.getByRole('button', {name: 'Action'})).toBeInTheDocument();
    await expect(canvas.getByText('ActionOnly body')).toBeInTheDocument();
    await expect(canvas.queryByTestId('PS_ActionOnly_Header')).not.toBeInTheDocument();

    // C) testId children suffix exists
    await expect(canvas.getByTestId('PS_ChildrenSuffix_Children')).toBeInTheDocument();
    await expect(canvas.getByText('ChildrenSuffix body')).toBeInTheDocument();

    // D) className merging
    const merged = canvas.getByTestId('PS_ClassName');
    await expect(merged.className).toContain('my-extra-class');

    // E) innerRef callback invoked with a node
    const node = (window as any).__ps_ref_node__;
    await expect(node).toBeTruthy();

    // F) class mapping
    const classes = canvas.getByTestId('PS_Classes');
    await expect(classes.className).toContain('frostedGlass');
    await expect(classes.className).toContain('roundedTop');
    await expect(classes.className).toContain('roundedBottom');
  },
};