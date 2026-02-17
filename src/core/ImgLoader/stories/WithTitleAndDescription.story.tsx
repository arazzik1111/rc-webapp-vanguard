import React from "react";
import { within, expect } from "storybook/test";
import { Story, testTitle, testDescription } from "./_ImgLoader.default";

export const WithTitleAndDescription: Story = {
  args: {
    title: testTitle,
    description: testDescription,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that both title and description are rendered
    const title = canvas.getByTestId("title");
    await expect(title).toBeInTheDocument();
    await expect(title).toHaveTextContent(testTitle);

    const description = canvas.getByTestId("description");
    await expect(description).toBeInTheDocument();
    await expect(description).toHaveTextContent(testDescription);
  },
};