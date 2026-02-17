import React from "react";
import { DatePicker } from "../DatePicker";
import { Story, testLocales } from "./_DatePicker.default";

export const Required: Story = {
  args: {
    locale: testLocales.en,
    required: true,
    label: "Required Date",
  },
  render: (args) => (
    <div style={{ width: "256px", height: "356px" }}>
      <DatePicker {...args} />
    </div>
  ),
};