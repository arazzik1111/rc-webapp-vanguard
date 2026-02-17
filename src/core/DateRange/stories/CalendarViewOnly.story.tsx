import { within, expect } from "storybook/test";
import { Story, testDates } from "./_DateRange.default";

export const CalendarViewOnly: Story = {
  args: {
    view: "calendar",
    initialValue: {
      startDate: testDates.threeDaysAgo,
      endDate: testDates.threeDaysLater,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId("date-range-container");
    await expect(container).toHaveClass("date-range-view-calendar");
  },
};