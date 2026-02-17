import React from "react";
import { DatePicker } from "../DatePicker";
import { Story, testLocales, testDates } from "./_DatePicker.default";

export const WithValue: Story = {
  args: {
    locale: testLocales.en,
    value: testDates.today,
  },
  render: (args) => (
    <div style={{ width: "256px", height: "356px" }}>
      <DatePicker {...args} />
    </div>
  ),
};