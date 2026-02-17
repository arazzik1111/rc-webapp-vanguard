import { within, expect } from "storybook/test";
import { Story } from "./_TagList.default";

export const WithPopoverMessages: Story = {
  args: {
    tags: [
      { id: 1, text: "Hover me", popoverMessage: "This is a popover message for tag 1" },
      { id: 2, text: "Hover me too", popoverMessage: "This is a popover message for tag 2" },
      { id: 3, text: "No popover" },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tag1 = canvas.getByText("Hover me");
    const tag2 = canvas.getByText("Hover me too");

    await expect(tag1).toBeInTheDocument();
    await expect(tag2).toBeInTheDocument();
  },
};