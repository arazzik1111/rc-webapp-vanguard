import React from "react";
import { within, expect } from "storybook/test";
import { Story, testTitle } from "./_ImgLoader.default";

export const WithTitle: Story = {
  args: {
    title: testTitle,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that the title is rendered
    const title = canvas.getByTestId("title");
    await expect(title).toBeInTheDocument();
    await expect(title).toHaveTextContent(testTitle);

    // Description should be empty
    const description = canvas.getByTestId("description");
    await expect(description).toHaveTextContent("");
  },
};