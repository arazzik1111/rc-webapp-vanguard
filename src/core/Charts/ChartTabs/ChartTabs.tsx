import { classNames } from '@helpers/classNames';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { Icon, IconSize } from '@vanguard/Icon/Icon';
import { IconNames } from '@vanguard/Icon/IconNames';
import { Text, TextTypes } from '@vanguard/Text/Text';
import React, { useMemo, useState } from 'react';
import { animated, useSpring } from 'react-spring';

import styles from './ChartTabs.module.scss';

export type ChartTabType = {
  name: string;
  icon: IconNames;
  defaultSelected?: boolean;
};

export interface ChartTabsProps {
  testId?: string;
  tabs: ChartTabType[];
  defaultSelectedTab?: number;
  onClick?: (index: number) => void;
}

export const ChartTabs = (props: ChartTabsProps) => {
  const { testId, tabs, onClick, defaultSelectedTab = 0 } = props;

  const getDefaultSelectedTab = useMemo(() => {
    const defaultTab = tabs.find((tab) => tab.defaultSelected);
    return defaultTab ? tabs.indexOf(defaultTab) : defaultSelectedTab;
  }, [tabs]);

  const [selectedTab, setSelectedTab] = useState(getDefaultSelectedTab);

  const handleTabClick = (index: number) => {
    setSelectedTab(index);

    if (onClick) {
      onClick(index);
    }
  };

  const tabAnimations = tabs.map((tab, index) =>
    useSpring({
      opacity: selectedTab === index ? 1 : 0.7,
      // translation value based on the difference between selected tab and index
      transform: `translateX(${index - selectedTab === 0 ? 0 : 20}%)`,
      config: { tension: 100, friction: 25, duration: 150 },
    }),
  );

  return (
    <ComponentContainer testId={testId} className={classNames(styles.tabs)}>
      {tabs.map((tab, index) => (
        <animated.div
          key={index}
          data-testid={`ChartsTabs-btn-${tab.name}`}
          style={tabAnimations[index]}
          className={classNames(styles.tab, selectedTab === index && styles.selected)}
          onClick={() => handleTabClick(index)}
        >
          <Icon color={selectedTab === index ? 'var(--fn-fg)' : 'var(--fn-fg-light)'} type={IconSize.small}>
            {tab.icon}
          </Icon>
          {selectedTab === index && (
            <Text color={'var(--fn-fg)'} type={TextTypes.text} textTight={true}>
              {tab.name}
            </Text>
          )}
        </animated.div>
      ))}
    </ComponentContainer>
  );
};
