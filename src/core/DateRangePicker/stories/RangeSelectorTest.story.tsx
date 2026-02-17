import { Story, wait } from "./_DateRangePicker.default";
import { within, userEvent, expect, waitFor } from "storybook/test";

export const RangeSelectorTest: Story = {
  name: "Range Selector Test",
  args: {
    testId: "daterangepicker-range-test",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const testId = args.testId ?? "";

    // Click on the right container to open the range selector
    const rightOnClick = canvas.getByTestId(`${testId}-right-reference-container`);
    await userEvent.click(rightOnClick);

    // Wait a moment for the popover to appear
    await wait(300);

    // The tooltip should be rendered at the document body level
    await waitFor(() => {
      const tooltips = document.querySelectorAll('[role="tooltip"]');
      expect(tooltips.length).toBe(1);
    });

    // Try to select a range item via direct DOM access
    const tooltip = document.querySelector('[role="tooltip"]');
    const rangeButtons = tooltip!.querySelectorAll("button");

    // Find a button that matches one of our expected ranges
    const rangeLabels = ["Last 24 hours", "Last 7 days", "Last 30 days"];
    let buttonFound = false;

    for (const button of Array.from(rangeButtons)) {
      if (rangeLabels.includes(button.textContent || "")) {
        await userEvent.click(button as HTMLElement);
        buttonFound = true;
        break;
      }
    }

    await expect(buttonFound).toBe(true);

    // Verify the value is updated in the input
    await waitFor(
      () => {
        const rangeInput = canvas.getByTestId("rangeselector-reference-input");
        expect(rangeInput).toHaveAttribute("value");
        expect(rangeInput.getAttribute("value")).not.toBe("");
      },
      { timeout: 2000 },
    );
  },
};