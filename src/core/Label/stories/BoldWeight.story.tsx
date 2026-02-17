import { within, expect } from "storybook/test";
import { FontWeights } from "@vanguard/Text/Text";
import { Story } from "./_Label.default";

export const BoldWeight: Story = {
  args: {
    value: "Bold weight label",
    fontWeight: FontWeights.bold,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Bold weight label");
    await expect(label).toBeInTheDocument();
  },
};