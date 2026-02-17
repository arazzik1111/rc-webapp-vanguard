import { within, expect } from "storybook/test";
import { FontWeights } from "@vanguard/Text/Text";
import { Story } from "./_Label.default";

export const MediumWeight: Story = {
  args: {
    value: "Medium weight label",
    fontWeight: FontWeights.medium,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Medium weight label");
    await expect(label).toBeInTheDocument();
  },
};