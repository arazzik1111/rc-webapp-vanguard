import React from 'react';
import { Header, HeaderTypes } from '../Header';
import { within, expect } from 'storybook/test';
import { Story } from './_Header.default';

export const AllContextsComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '90%' }}>
      <Header title="Page Header Context" description="Page header description" type={HeaderTypes.pageHeader} />
      <Header title="Drawer Header Context" description="Drawer header description" type={HeaderTypes.drawerHeader} />
      <Header
        title="Compact Drawer Context"
        description="Compact drawer description"
        type={HeaderTypes.compactDrawerHeader}
      />
      <Header title="BAM Header Context" description="BAM header description" type={HeaderTypes.bamHeader} />
      <Header
        title="BAM Preview Context"
        description="BAM preview description"
        type={HeaderTypes.bamWithPreviewHeader}
      />
      <Header title="Section Header Context" description="Section header description" type={HeaderTypes.sectionHeader} />
      <Header
        title="Compact Section Context"
        description="Compact section description"
        type={HeaderTypes.compactSectionHeader}
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText('Page Header Context')).toBeInTheDocument();
    await expect(canvas.getByText('Drawer Header Context')).toBeInTheDocument();
    await expect(canvas.getByText('Compact Drawer Context')).toBeInTheDocument();
    await expect(canvas.getByText('BAM Header Context')).toBeInTheDocument();
    await expect(canvas.getByText('BAM Preview Context')).toBeInTheDocument();
    await expect(canvas.getByText('Section Header Context')).toBeInTheDocument();
    await expect(canvas.getByText('Compact Section Context')).toBeInTheDocument();

    await expect(canvas.getByText('Page header description')).toBeInTheDocument();
    await expect(canvas.getByText('Drawer header description')).toBeInTheDocument();
    await expect(canvas.getByText('Compact drawer description')).toBeInTheDocument();
    await expect(canvas.getByText('BAM header description')).toBeInTheDocument();
    await expect(canvas.getByText('BAM preview description')).toBeInTheDocument();
    await expect(canvas.getByText('Section header description')).toBeInTheDocument();
    await expect(canvas.getByText('Compact section description')).toBeInTheDocument();
  },
};

export default AllContextsComparison;
