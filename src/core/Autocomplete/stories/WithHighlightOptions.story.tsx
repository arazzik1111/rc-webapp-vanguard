import React from "react";
import { Autocomplete } from "../Autocomplete";
import { within, expect } from "storybook/test";
import { Story, testOptions } from "./_Autocomplete.default";

/**
 * Autocomplete with highlight options.
 * Tests highlightOptions prop.
 */
export const WithHighlightOptions: Story = {
  args: {
    placeholder: "Type to search fruits...",
    options: testOptions,
    optionKey: "title",
    highlightOptions: true,
    onChange: (event, value) => console.log("Selected:", value),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await expect(input).toBeInTheDocument();
    // Check that the component renders without errors
    await expect(canvasElement).toBeInTheDocument();
  },
};