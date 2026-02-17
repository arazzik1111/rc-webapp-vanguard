import { within, expect } from "storybook/test";
import { FontWeights } from "@vanguard/Text/Text";
import { Story } from "./_Label.default";

export const NormalWeight: Story = {
  args: {
    value: "Normal weight label",
    fontWeight: FontWeights.regular,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Normal weight label");
    await expect(label).toBeInTheDocument();
  },
};