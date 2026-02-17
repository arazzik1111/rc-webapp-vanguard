import { Story, clickDatePickerCalendarDate } from "./_DateRangePicker.default";
import { within, userEvent, waitFor, expect } from "storybook/test";

export const WithInteraction: Story = {
  name: "With Interaction Test",
  args: {
    testId: "daterangepicker-test-id",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const testId = args.testId ?? "";

    // Click on the left container to open the calendar
    const leftOnClick = canvas.getByTestId(`${testId}-left-reference-container`);
    await userEvent.click(leftOnClick);

    // Wait for the popover to appear and check it
    await waitFor(() => {
      const tooltips = document.querySelectorAll('[role="tooltip"]');
      expect(tooltips.length).toBe(1);
      expect(tooltips[0].getElementsByClassName("date-range-picker-dropdown").length).toBe(1);
    });

    // Attempt to click dates
    await clickDatePickerCalendarDate(canvas, testId, 8);
    await clickDatePickerCalendarDate(canvas, testId, 15);
  },
};