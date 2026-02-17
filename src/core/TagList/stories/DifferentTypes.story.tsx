import { within, expect } from "storybook/test";
import { Story } from "./_TagList.default";

export const DifferentTypes: Story = {
  args: {
    tags: [
      { id: 1, text: "Default Tag", type: "tag-default" as any },
      { id: 2, text: "Success Tag", type: "tag-success" as any },
      { id: 3, text: "Warning Tag", type: "tag-warning" as any },
      { id: 4, text: "Error Tag", type: "tag-error" as any },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const defaultTag = canvas.getByText("Default Tag");
    const successTag = canvas.getByText("Success Tag");
    const warningTag = canvas.getByText("Warning Tag");
    const errorTag = canvas.getByText("Error Tag");

    await expect(defaultTag).toBeInTheDocument();
    await expect(successTag).toBeInTheDocument();
    await expect(warningTag).toBeInTheDocument();
    await expect(errorTag).toBeInTheDocument();
  },
};