import { within, expect } from "storybook/test";
import { Story, baseArgs } from "./_BigLegendItem.default";
import { FontWeights, TextTypes } from "@vanguard/Text/Text";

export const CustomStyling: Story = {
  args: {
    ...baseArgs,
    descriptionColor: "--s400",
    descriptionFont: FontWeights.medium,
    descriptionType: TextTypes.text,
    iconFillColor: "--a2900",
    title: "Custom Styled Item",
    description: "Item with custom styling applied",
    testId: "custom-styling-big-legend-item",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Test that title and description are updated
    await expect(canvas.getByText("Custom Styled Item")).toBeInTheDocument();
    await expect(canvas.getByText("Item with custom styling applied")).toBeInTheDocument();
  },
};