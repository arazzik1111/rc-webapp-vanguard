import { Render } from '@vanguard/Render/Render';
import React from 'react';

export interface TabPanelProps {
  currentTab: number | string;
  value: number | string;
  keepInDom?: boolean;
  children?: React.ReactNode;
}

export const TabPanel = (props: TabPanelProps) => {
  const { currentTab, value, children, keepInDom } = props;

  return (
    <Render if={currentTab === value} keepInDom={keepInDom}>
      <div role="tabpanel">{children}</div>
    </Render>
  );
};
