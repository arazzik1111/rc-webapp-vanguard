import React, { useState } from "react";
import { DateRangePicker, DateRangePickerReturn } from "../DateRangePicker";
import { Story, clickDatePickerCalendarDate } from "./_DateRangePicker.default";
import { within } from "storybook/test";

export const WithCallback: Story = {
  name: "With Callback",
  render: () => {
    const [data, setData] = useState<DateRangePickerReturn | undefined>();
    return (
      <div>
        DATA : {JSON.stringify(data)}
        <DateRangePicker
          testId="daterangepicker-callback-test"
          onChange={(data) => {
            setData(data);
          }}
        />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testId = "daterangepicker-callback-test";

    // Click on date to trigger callback
    await clickDatePickerCalendarDate(canvas, testId, 10);
    await clickDatePickerCalendarDate(canvas, testId, 15);

    // The data should be updated in the component (visual confirmation)
    // No need to test here as it's visually observable in the story
  },
};