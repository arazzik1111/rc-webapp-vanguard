import moment from "moment";
import { Story } from "./_DateRangePicker.default";
import { within, userEvent, expect, screen } from "storybook/test";

export const Disabled: Story = {
  name: "Disabled",
  args: {
    disabled: true,
    startDate: moment().subtract(7, "day").toDate(),
    endDate: moment().toDate(),
    testId: "daterangepicker-disabled-test",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const testId = args.testId;

    // Try to click and verify nothing happens (no tooltip appears)
    const leftOnClick = screen.getByTestId(`${testId}-left-reference-container`);
    await userEvent.click(leftOnClick);

    // Verify the container has the disabled class
    const container = canvasElement.querySelector(".date-range-picker-disabled");
    await expect(container).toBeTruthy();

    // Verify no tooltip appears
    const tooltips = canvasElement.querySelectorAll("[role='tooltip']");
    await expect(tooltips.length).toBe(0);
  },
};