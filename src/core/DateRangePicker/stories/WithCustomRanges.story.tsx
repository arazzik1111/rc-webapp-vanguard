import moment from "moment";
import { createDatePickerRange } from "@vanguard/DateRangePicker/date-range-picker-utils/date-range-picker-utils";
import { Story } from "./_DateRangePicker.default";
import { within, userEvent, expect, waitFor, screen } from "storybook/test";

export const WithCustomRanges: Story = {
  name: "With Custom Ranges",
  args: {
    testId: "daterangepicker-custom-ranges",
    ranges: [
      createDatePickerRange({
        startDate: moment().subtract(1, "hour").toDate(),
        endDate: moment().toDate(),
        label: "Last 1 hours",
      }),
      createDatePickerRange({
        startDate: moment().subtract(1, "day").toDate(),
        endDate: moment().toDate(),
        label: "Last 1 days",
      }),
      createDatePickerRange({
        startDate: moment().subtract(2, "day").toDate(),
        endDate: moment().toDate(),
        label: "Last 2 days",
        isDefault: true,
      }),
      createDatePickerRange({
        startDate: moment().subtract(3, "day").toDate(),
        endDate: moment().toDate(),
        label: "Last 3 days",
      }),
    ],
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const testId = args.testId;

    // Open the right calendar to check custom ranges
    const rightOnClick = canvas.getByTestId(`${testId}-right-reference-container`);
    await userEvent.click(rightOnClick);

    // Verify custom ranges appear in the dropdown
    await waitFor(() => {
      const tooltip = screen.getByRole("tooltip");
      const buttons = tooltip.querySelectorAll("button");

      const rangeTexts = Array.from(buttons)
        .filter((b) => b.className?.indexOf("rdrStaticRange") !== -1)
        .map((b) => b.textContent);

      // Check for custom ranges
      expect(rangeTexts).toContain("Last 1 hours");
      expect(rangeTexts).toContain("Last 2 days");
      expect(rangeTexts).toContain("Last 3 days");
    });
  },
};