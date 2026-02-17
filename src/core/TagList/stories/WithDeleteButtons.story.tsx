import { within, expect } from "storybook/test";
import { Story, mockDeleteCallback } from "./_TagList.default";

export const WithDeleteButtons: Story = {
  args: {
    tags: [
      { id: 1, text: "Deletable Tag 1", hasDeleteBtn: true, deleteBtnCallback: mockDeleteCallback },
      { id: 2, text: "Deletable Tag 2", hasDeleteBtn: true, deleteBtnCallback: mockDeleteCallback },
      { id: 3, text: "Regular Tag 3" },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tag1 = canvas.getByText("Deletable Tag 1");
    const tag2 = canvas.getByText("Deletable Tag 2");
    const tag3 = canvas.getByText("Regular Tag 3");

    await expect(tag1).toBeInTheDocument();
    await expect(tag2).toBeInTheDocument();
    await expect(tag3).toBeInTheDocument();
  },
};