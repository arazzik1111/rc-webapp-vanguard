import { within, expect } from "storybook/test";
import { Story, baseArgs } from "./_BigLegendItem.default";

export const WithPercentage: Story = {
  args: {
    ...baseArgs,
    showPercentage: true,
    showBadge: false,
    testId: "percentage-big-legend-item",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Test that percentage is shown
    await expect(canvas.getByText("4.8%")).toBeInTheDocument();

    // Test that badge is not shown
    const badgeElement = canvas.queryByText("+4.8%");
    await expect(badgeElement).toBeNull();
  },
};