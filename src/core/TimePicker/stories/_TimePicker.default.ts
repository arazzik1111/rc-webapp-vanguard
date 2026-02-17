import { StoryObj } from '@storybook/react';
import { SelectOnChange, SelectOptionProp } from '@vanguard/Select/Select';
import { expect, fn, screen, userEvent, within } from 'storybook/test';

import { TimePicker } from '../TimePicker';

export type Story = StoryObj<typeof TimePicker>;

export const createMockOnChange = () => fn() as SelectOnChange;

export const testDefaultValue = async (canvasElement: HTMLElement, args: any, expectVisible: boolean) => {
  const canvas = within(canvasElement);
  const textValue = args.value ?? '';

  if (expectVisible) {
    // For input values, check if the input contains the value
    const input = canvas.getByDisplayValue(textValue);
    await expect(input).toBeInTheDocument();
  } else {
    // For cases where value should not be visible, check that no input has this value
    await expect(() => canvas.getByDisplayValue(textValue)).toThrow();
  }
};

export const testOnChange = async (
  canvasElement: HTMLElement,
  args: any,
  opts: {
    expectedSelectedValue: SelectOptionProp;
    clickOn: string;
  },
) => {
  const canvas = within(canvasElement);

  // Open the dropdown by clicking on the combobox
  const timePicker = await canvas.findByRole('combobox');
  const user = userEvent.setup();
  await user.click(timePicker);

  // For dropdown options rendered in portals, we need to use screen
  // This is an exception to the rule of using within(canvasElement)
  const option = await screen.findByText(opts.clickOn);
  await user.click(option);

  // Verify that onChange was called with the expected selected value
  await expect(args.onChange).toHaveBeenCalledWith(expect.anything(), opts.expectedSelectedValue);
};
