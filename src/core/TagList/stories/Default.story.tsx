import { within, expect } from "storybook/test";
import { Story, defaultTags } from "./_TagList.default";

export const Default: Story = {
  args: {
    tags: defaultTags,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvasElement.querySelector(".TagList-container");
    await expect(container).toBeInTheDocument();

    const tag1 = canvas.getByText("Tag 1");
    const tag2 = canvas.getByText("Tag 2");
    const tag3 = canvas.getByText("Tag 3");

    await expect(tag1).toBeInTheDocument();
    await expect(tag2).toBeInTheDocument();
    await expect(tag3).toBeInTheDocument();
  },
};