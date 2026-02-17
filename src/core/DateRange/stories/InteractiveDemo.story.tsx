import React from "react";
import moment from "moment";
import { within, expect } from "storybook/test";
import { DateRange, DateRangePickerResp } from "../DateRange";
import { Story, testDates } from "./_DateRange.default";

export const InteractiveDemo: Story = {
  render: () => {
    const [selectedRange, setSelectedRange] = React.useState<DateRangePickerResp | null>(null);

    return (
      <div style={{ padding: "20px" }}>
        <DateRange
          view="all"
          initialValue={{
            startDate: testDates.weekAgo,
            endDate: testDates.today,
          }}
          onChange={(range) => setSelectedRange(range)}
        />
        {selectedRange && (
          <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#f5f5f5" }}>
            <strong>Selected Range:</strong>
            <br />
            Start: {selectedRange.selection.startDate?.toLocaleDateString()}
            <br />
            End: {selectedRange.selection.endDate?.toLocaleDateString()}
          </div>
        )}
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId("date-range-container");
    await expect(container).toBeInTheDocument();
  },
};