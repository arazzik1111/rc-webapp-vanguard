import React from 'react';
import { within, expect } from 'storybook/test';

import { PageSection } from '../PageSection';
import type { Story } from './_PageSection.default';

export const Visibility: Story = {
  render: () => (
    <>
      <PageSection testId="PS_Visible" title="Visible">
        <div>Visible body</div>
      </PageSection>

      <PageSection testId="PS_Hidden" isVisible={false} title="Hidden">
        <div>Hidden body</div>
      </PageSection>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByTestId('PS_Visible')).toBeInTheDocument();
    await expect(canvas.getByText('Visible')).toBeInTheDocument();
    await expect(canvas.getByText('Visible body')).toBeInTheDocument();

    // Must return null: nothing in the DOM
    await expect(canvas.queryByTestId('PS_Hidden')).not.toBeInTheDocument();
    await expect(canvas.queryByText('Hidden')).not.toBeInTheDocument();
    await expect(canvas.queryByText('Hidden body')).not.toBeInTheDocument();
  },
};