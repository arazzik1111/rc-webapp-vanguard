import { StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Tabs } from '../../Tabs';
import { Tab, TabProps } from '../Tab';

export type Story = StoryObj<typeof Tab>;

// Interactive Tabs Container to showcase Tab components properly
export const InteractiveTabsDemo = ({ tabs, tabConfig }: { tabs: TabProps[]; tabConfig?: any }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: 'var(--n50, #f8f9fa)',
        borderRadius: '8px',
      }}
    >
      <Tabs
        tabs={tabs}
        value={activeTab}
        onChange={(e, value) => setActiveTab(value)}
        tabConfig={tabConfig}
        testId="demo-tabs"
      />
    </div>
  );
};
