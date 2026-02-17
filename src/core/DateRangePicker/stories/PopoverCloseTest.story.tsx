import { Story, clickDatePickerCalendarDate, wait } from "./_DateRangePicker.default";
import { within, userEvent, expect, waitFor } from "storybook/test";

export const PopoverCloseTest: Story = {
  name: "Popover Close Test",
  args: {
    testId: "daterangepicker-popover-close-test",
    onDateRangeSelected: () => {},
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const testId = args.testId ?? "";

    // Click on the left container to open the calendar
    const leftOnClick = canvas.getByTestId(`${testId}-left-reference-container`);
    await userEvent.click(leftOnClick);

    // Wait for the popover to appear
    await wait(300);

    // Verify the popover is open
    await waitFor(() => {
      const tooltips = document.querySelectorAll('[role="tooltip"]');
      expect(tooltips.length).toBe(1);
    });

    // Select first date (day 10 of current month)
    await clickDatePickerCalendarDate(canvas, testId, 10);

    // Verify popover is still open after selecting first date
    await wait(100);

    await waitFor(() => {
      const tooltipsAfterFirstSelection = document.querySelectorAll('[role="tooltip"]');
      expect(tooltipsAfterFirstSelection.length).toBe(1);
    });

    // Select second date (day 15 of current month)
    await clickDatePickerCalendarDate(canvas, testId, 15);

    // Wait a moment for the popover to close
    await wait(500);

    // Verify the popover is now closed
    await waitFor(
      () => {
        const tooltipsAfterSecondSelection = document.querySelectorAll('[role="tooltip"]');
        expect(tooltipsAfterSecondSelection.length).toBe(0);
      },
      { timeout: 1000 },
    );
  },
};