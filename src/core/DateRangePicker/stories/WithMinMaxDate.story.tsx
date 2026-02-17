import moment from "moment";
import { Story } from "./_DateRangePicker.default";
import { within, expect, waitFor } from "storybook/test";

export const WithMinMaxDate: Story = {
  name: "With Min/Max Date",
  args: {
    minDate: moment().subtract(2, "day").toDate(),
    maxDate: moment().add(2, "day").toDate(),
    testId: "daterangepicker-minmax-test",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const testId = args.testId;

    // Check if date range input is visible and has a default value
    const rangeInputContainer = canvas.getByTestId(`${testId}-rangeselector-reference-input`);
    await expect(rangeInputContainer).toBeVisible();

    // Wait for the input to be populated with default value
    await waitFor(
      () => {
        const rangeInput = canvas.getByTestId("rangeselector-reference-input");
        expect(rangeInput).toHaveAttribute("value");
      },
      { timeout: 2000 },
    );
  },
};