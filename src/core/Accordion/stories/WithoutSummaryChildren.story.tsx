import { within, expect } from "storybook/test";
import { Story, defaultProps, DETAILS_TEXT } from "./_Accordion.default";

export const WithoutSummaryChildren: Story = {
  args: {
    ...defaultProps,
    summaryChildren: undefined,
    expanded: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const summaryElement = canvasElement.querySelector(".AccordionSummary-hide");

    // 👇 Assert summary is hidden when no summaryChildren
    await expect(summaryElement).toBeInTheDocument();

    // 👇 Assert details are visible when expanded is true
    await expect(canvas.getByText(DETAILS_TEXT)).toBeVisible();
  },
};