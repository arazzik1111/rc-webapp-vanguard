import { within, expect } from "storybook/test";
import { Story } from "./_TagList.default";

export const EmptyTagList: Story = {
  args: {
    tags: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvasElement.querySelector(".TagList-container");
    await expect(container).toBeInTheDocument();

    // Should be empty
    const tags = canvasElement.querySelectorAll(".Tag-container");
    await expect(tags).toHaveLength(0);
  },
};