import { StoryObj } from '@storybook/react';
import { userEvent } from 'storybook/test';

import { DateRangePicker } from '../DateRangePicker';

export type Story = StoryObj<typeof DateRangePicker>;

// Improved helper functions with proper async handling
/**
 * Helper function to click on a specific date in the date picker calendar
 * @param canvas - Storybook canvas
 * @param testId - Test id prefix for the component
 * @param dayNumber - The day number to click
 * @returns Promise that resolves when the date is clicked
 */
export const clickDatePickerCalendarDate = async (canvas: any, testId: string, dayNumber: number) => {
  // Click on the left container to open the calendar
  const leftOnClick = canvas.getByTestId(`${testId}-left-reference-container`);
  await userEvent.click(leftOnClick);

  // Wait a moment for the popover to fully render
  await new Promise((resolve) => setTimeout(resolve, 300));

  // Try to find and click the specific day
  // Look for the tooltip in the document body since it might be rendered outside the component
  const tooltips = document.querySelectorAll('[role="tooltip"]');
  if (tooltips.length === 0) {
    throw new Error('No tooltips found in the document');
  }

  const tooltip = tooltips[0];
  const buttons = document.getElementsByClassName('rdr-day-number-rc-btn');

  let dayButton: Element | null = null;
  for (const element of Array.from(buttons)) {
    let button = element as HTMLElement;
    let traverseCount = 0;
    while (button && !button.className?.includes('rdrDay') && traverseCount < 10) {
      button = button.parentNode as HTMLElement;
      traverseCount++;
    }
    if (
      button &&
      button.textContent === String(dayNumber) &&
      button.className?.indexOf('rdrDayPassive') === -1 &&
      button.className?.indexOf('rdrDay') !== -1
    ) {
      dayButton = element;
      break;
    }
  }

  if (dayButton) {
    console.log('DBTN', dayButton);
    // Use a more direct approach to trigger the click event
    // This should ensure that all event handlers are correctly called
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    dayButton.dispatchEvent(clickEvent);

    // Also use userEvent as a backup
    await userEvent.click(dayButton as HTMLElement);
  } else {
    throw new Error(`Day ${dayNumber} not found in calendar`);
  }
};

/**
 * Helper function to click on a specific range in the date range selector
 * @param canvas - Storybook canvas
 * @param testId - Test id prefix for the component
 * @param itemLabel - The label text of the range to click
 * @returns Promise that resolves when the range item is clicked
 */
export const clickRangeSelectorItem = async (canvas: any, testId: string, itemLabel: string) => {
  // Click on the right container to open the range selector
  const rightOnClick = canvas.getByTestId(`${testId}-right-reference-container`);
  await userEvent.click(rightOnClick);

  // Wait a moment for the popover to fully render
  await new Promise((resolve) => setTimeout(resolve, 300));

  // Look for the tooltip in the document body
  const tooltips = document.querySelectorAll('[role="tooltip"]');
  if (tooltips.length === 0) {
    throw new Error('No tooltips found in the document');
  }

  const tooltip = tooltips[0];
  const buttons = tooltip.querySelectorAll('button');

  let rangeButton: Element | null = null;
  for (const button of Array.from(buttons)) {
    if (button.textContent === itemLabel && button.className?.indexOf('rdrStaticRange') !== -1) {
      rangeButton = button;
      break;
    }
  }

  if (rangeButton) {
    await userEvent.click(rangeButton as HTMLElement);
  } else {
    throw new Error(`Range "${itemLabel}" not found in selector`);
  }
};

export const waitForDebounce = (ms: number = 100) => new Promise((resolve) => setTimeout(resolve, ms));

export { wait } from '@helpers/wait';
