import { within, userEvent, expect } from "storybook/test";
import { Story, defaultProps, DETAILS_TEXT } from "./_Accordion.default";

export const WithCustomStyles: Story = {
  args: {
    ...defaultProps,
    summaryCustomStyle: { backgroundColor: "lightblue", padding: "10px" },
    baseCustomStyle: { border: "2px solid red" },
    detailsCustomStyle: { backgroundColor: "lightgreen", padding: "15px" },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const action = canvas.getByRole("button");

    // 👇 Test that accordion works with custom styles
    await userEvent.click(action);
    await expect(canvas.getByText(DETAILS_TEXT)).toBeVisible();
  },
};