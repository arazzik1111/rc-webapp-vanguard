import React from "react";
import { within, expect } from "storybook/test";
import { Story } from "./_ImgLoader.default";

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that the component renders without props
    const img = canvas.getByRole("img");
    await expect(img).toBeInTheDocument();

    // Title and description should be empty
    const title = canvas.getByTestId("title");
    const description = canvas.getByTestId("description");
    await expect(title).toHaveTextContent("");
    await expect(description).toHaveTextContent("");
  },
};