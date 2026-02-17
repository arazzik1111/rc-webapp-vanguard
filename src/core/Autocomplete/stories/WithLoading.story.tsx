import React from "react";
import { Autocomplete } from "../Autocomplete";
import { within, expect } from "storybook/test";
import { Story, testOptions } from "./_Autocomplete.default";

/**
 * Autocomplete with loading state.
 * Tests isLoading prop.
 */
export const WithLoading: Story = {
  args: {
    placeholder: "Loading options...",
    options: testOptions,
    optionKey: "title",
    isLoading: true,
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