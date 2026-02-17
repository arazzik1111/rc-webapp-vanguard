import { within, expect } from "storybook/test";
import { Story, testLocales, testDates, testTimes, createMockOnChange } from "./_DateTimePicker.default";

export const WithDateAndTime: Story = {
  args: {
    locale: testLocales.en,
    date: testDates.today,
    time: testTimes.morning,
    onChange: createMockOnChange(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Start date");
    await expect(label).toBeInTheDocument();
  },
};