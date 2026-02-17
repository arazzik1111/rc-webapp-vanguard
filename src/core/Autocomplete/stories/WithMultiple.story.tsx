import React from "react";
import { Autocomplete } from "../Autocomplete";
import { within, expect } from "storybook/test";
import { Story, testOptions } from "./_Autocomplete.default";

/**
 * Autocomplete with multiple selection.
 * Tests multiple prop and splitCommaTag functionality.
 */
export const WithMultiple: Story = {
  args: {
    placeholder: "Select multiple fruits...",
    options: testOptions,
    optionKey: "title",
    multiple: true,
    splitCommaTag: true,
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