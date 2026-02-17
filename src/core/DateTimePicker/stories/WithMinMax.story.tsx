import { within, expect } from "storybook/test";
import { Story, testLocales, testDates, testTimes } from "./_DateTimePicker.default";

export const WithMinMax: Story = {
  args: {
    locale: testLocales.en,
    minDate: testDates.today,
    maxDate: testDates.tomorrow,
    minTime: testTimes.morning,
    maxTime: testTimes.evening,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Start date");
    await expect(label).toBeInTheDocument();
  },
};