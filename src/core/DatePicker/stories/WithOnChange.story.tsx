import React from "react";
import { DatePicker } from "../DatePicker";
import { Story, testLocales, createMockOnChange } from "./_DatePicker.default";

export const WithOnChange: Story = {
  args: {
    locale: testLocales.en,
    onChange: createMockOnChange(),
    label: "With Change Handler",
  },
  render: (args) => (
    <div style={{ width: "256px", height: "356px" }}>
      <DatePicker {...args} />
    </div>
  ),
};