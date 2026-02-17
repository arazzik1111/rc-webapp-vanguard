import moment from "moment";
import { within, expect } from "storybook/test";
import { Story, createMockOnChange, testDates } from "./_DateRange.default";

export const WithMomentDates: Story = {
  args: {
    initialValue: {
      startDate: testDates.monthAgo,
      endDate: testDates.today,
    },
    onChange: createMockOnChange(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId("date-range-container");
    await expect(container).toBeInTheDocument();
  },
};