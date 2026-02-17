import { within, expect } from "storybook/test";
import { Story } from "./_TagList.default";

export const ActiveTags: Story = {
  args: {
    tags: [
      { id: 1, text: "Active Tag", active: true },
      { id: 2, text: "Inactive Tag", active: false },
      { id: 3, text: "Default Tag" },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const activeTag = canvas.getByText("Active Tag");
    const inactiveTag = canvas.getByText("Inactive Tag");

    await expect(activeTag).toBeInTheDocument();
    await expect(inactiveTag).toBeInTheDocument();
  },
};