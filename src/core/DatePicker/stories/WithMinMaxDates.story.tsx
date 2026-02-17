import React from "react";
import { DatePicker } from "../DatePicker";
import { Story, testLocales, testDates } from "./_DatePicker.default";

export const WithMinMaxDates: Story = {
  args: {
    locale: testLocales.en,
    minDate: testDates.yesterday,
    maxDate: testDates.weekFromNow,
    label: "Date with Min/Max",
  },
  render: (args) => (
    <div style={{ width: "256px", height: "356px" }}>
      <DatePicker {...args} />
    </div>
  ),
};