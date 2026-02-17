import { within, expect } from "storybook/test";
import { Story } from "./_TagList.default";

export const ChipVariant: Story = {
  args: {
    variant: "chip",
    tags: [
      { id: 1, text: "Chip 1" },
      { id: 2, text: "Chip 2" },
      { id: 3, text: "Chip 3" },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const chip1 = canvas.getByText("Chip 1");
    const chip2 = canvas.getByText("Chip 2");

    await expect(chip1).toBeInTheDocument();
    await expect(chip2).toBeInTheDocument();
  },
};