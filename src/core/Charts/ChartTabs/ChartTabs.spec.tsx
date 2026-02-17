import { appScreen, render } from '@test-utils/test-utils';
import userEvent from '@testing-library/user-event';
import { IconNames } from '@vanguard/Icon/IconNames';
import React from 'react';

import { ChartTabs, ChartTabType } from './ChartTabs';
import styles from './ChartTabs.module.scss';

const tabs = [
  {
    name: 'Overview',
    icon: IconNames.lineChart,
  },
  {
    name: 'Demographics',
    icon: IconNames.user,
  },
  {
    name: 'Platforms',
    icon: IconNames.duplicate,
  },
];

describe('ChartTabs component tests', () => {
  test('should render ChartTabs component', async () => {
    const testId = 'ChartTabs_testId1';
    render(<ChartTabs testId={testId} tabs={tabs} />);
    appScreen.getByTestId(testId);
  });
  test('should change active tab when a user clicks another tab', async () => {
    const user = userEvent.setup();
    const testId = 'ChartTabs_testId1';
    render(<ChartTabs testId={testId} tabs={tabs} />);

    const ctaTestId = `ChartsTabs-btn-${tabs[1].name}`;
    const CTA = appScreen.getByTestId(ctaTestId);

    await user.click(CTA);
    expect(CTA.classList.contains(styles.selected)).toBe(true);
  });
  test('should select first tab by default', async () => {
    const testId = 'ChartTabs_testId1';
    render(<ChartTabs testId={testId} tabs={tabs} />);

    const ctaTestId = `ChartsTabs-btn-${tabs[0].name}`;
    const CTA = appScreen.getByTestId(ctaTestId);

    expect(CTA.classList.contains(styles.selected)).toBe(true);
  });
  test('should select marked tab as default', async () => {
    const tabs: ChartTabType[] = [
      {
        name: 'Overview',
        icon: IconNames.lineChart,
      },
      {
        name: 'Demographics',
        defaultSelected: true,
        icon: IconNames.user,
      },
      {
        name: 'Platforms',
        icon: IconNames.duplicate,
      },
    ];

    const testId = 'ChartTabs_testId1';
    render(<ChartTabs testId={testId} tabs={tabs} />);

    const ctaTestId = `ChartsTabs-btn-${tabs[1].name}`;
    const CTA = appScreen.getByTestId(ctaTestId);

    expect(CTA.classList.contains(styles.selected)).toBe(true);
  });
  test('should return correct index on tab click', async () => {
    const tabs: ChartTabType[] = [
      {
        name: 'Overview',
        icon: IconNames.lineChart,
      },
      {
        name: 'Demographics',
        icon: IconNames.user,
      },
      {
        name: 'Platforms',
        icon: IconNames.duplicate,
      },
    ];

    const testId = 'ChartTabs_testId1';
    let selectedIndex: number = -1;

    const { getByTestId } = render(
      <ChartTabs testId={testId} tabs={tabs} onClick={(index: number) => (selectedIndex = index)} />,
    );

    const tabToClick = getByTestId(`ChartsTabs-btn-${tabs[1].name}`);
    const user = userEvent.setup();

    await user.click(tabToClick);
    expect(selectedIndex).toBe(1); // Verify that the correct index is returned
  });
  test('should call click callback with correct index', async () => {
    const tabs: ChartTabType[] = [
      {
        name: 'Overview',
        icon: IconNames.lineChart,
      },
      {
        name: 'Demographics',
        icon: IconNames.user,
      },
      {
        name: 'Platforms',
        icon: IconNames.duplicate,
      },
    ];

    const testId = 'ChartTabs_testId1';
    const clickCallback = jest.fn(); // Create a mock function

    const { getByTestId } = render(<ChartTabs testId={testId} tabs={tabs} onClick={clickCallback} />);

    const tabToClick = getByTestId(`ChartsTabs-btn-${tabs[1].name}`);

    const user = userEvent.setup();
    await user.click(tabToClick);

    expect(clickCallback).toHaveBeenCalledTimes(1); // Click callback should be called once
    expect(clickCallback).toHaveBeenCalledWith(1); // Should be called with the index of the clicked tab
  });
});
