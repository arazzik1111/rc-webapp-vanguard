import React from "react";
import { within, expect } from "storybook/test";
import { Story, testTitle, testDescription, testReplacements } from "./_ImgLoader.default";

export const WithReplacements: Story = {
  args: {
    title: "Loading {count} {item}",
    description: "Please wait for {count} {item} to load.",
    replacements: testReplacements,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that replacements are applied
    const title = canvas.getByTestId("title");
    await expect(title).toBeInTheDocument();
    await expect(title).toHaveTextContent("Loading 5 images");

    const description = canvas.getByTestId("description");
    await expect(description).toBeInTheDocument();
    await expect(description).toHaveTextContent("Please wait for 5 images to load.");
  },
};