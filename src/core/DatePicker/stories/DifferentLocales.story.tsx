import React from "react";
import { DatePicker } from "../DatePicker";
import { Story, testLocales } from "./_DatePicker.default";

export const DifferentLocales: Story = {
  args: {
    locale: testLocales.de, // German locale
    value: Date.now(),
    label: "Datum auswählen",
  },
  render: (args) => (
    <div style={{ width: "256px", height: "356px" }}>
      <DatePicker {...args} />
    </div>
  ),
};