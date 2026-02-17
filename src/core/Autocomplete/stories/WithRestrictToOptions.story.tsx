import React from "react";
import { Autocomplete } from "../Autocomplete";
import { within, expect } from "storybook/test";
import { Story, testOptions } from "./_Autocomplete.default";

/**
 * Autocomplete with restrict to options.
 * Tests restrictToOptions prop.
 */
export const WithRestrictToOptions: Story = {
  args: {
    placeholder: "Must select from list...",
    options: testOptions,
    optionKey: "title",
    restrictToOptions: true,
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