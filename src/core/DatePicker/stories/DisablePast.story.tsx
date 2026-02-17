import React from "react";
import { DatePicker } from "../DatePicker";
import { Story, testLocales } from "./_DatePicker.default";

export const DisablePast: Story = {
  args: {
    locale: testLocales.en,
    disablePast: true,
    label: "Future Dates Only",
  },
  render: (args) => (
    <div style={{ width: "256px", height: "356px" }}>
      <DatePicker {...args} />
    </div>
  ),
};