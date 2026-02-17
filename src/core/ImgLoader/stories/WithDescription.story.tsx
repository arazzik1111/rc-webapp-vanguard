import React from "react";
import { within, expect } from "storybook/test";
import { Story, testDescription } from "./_ImgLoader.default";

export const WithDescription: Story = {
  args: {
    description: testDescription,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that the description is rendered
    const description = canvas.getByTestId("description");
    await expect(description).toBeInTheDocument();
    await expect(description).toHaveTextContent(testDescription);

    // Title should be empty
    const title = canvas.getByTestId("title");
    await expect(title).toHaveTextContent("");
  },
};