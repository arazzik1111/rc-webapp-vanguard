import React from "react";
import { DatePicker } from "../DatePicker";
import { Story, testLocales } from "./_DatePicker.default";

export const CloseOnClickAway: Story = {
  args: {
    locale: testLocales.en,
    closeOnCLickAway: true,
    label: "Click Away to Close",
  },
  render: (args) => (
    <div style={{ width: "256px", height: "356px" }}>
      <DatePicker {...args} />
    </div>
  ),
};