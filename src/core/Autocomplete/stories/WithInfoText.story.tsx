import React from "react";
import { Autocomplete } from "../Autocomplete";
import { within, expect } from "storybook/test";
import { Story, testOptions } from "./_Autocomplete.default";

/**
 * Autocomplete with info text.
 * Tests infoText prop.
 */
export const WithInfoText: Story = {
  args: {
    placeholder: "Select a fruit...",
    options: testOptions,
    optionKey: "title",
    infoText: "Choose your favorite fruit from the list",
    onChange: (event, value) => console.log("Selected:", value),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await expect(input).toBeInTheDocument();
    // Info text should be present
    const infoText = canvas.getByText("Choose your favorite fruit from the list");
    await expect(infoText).toBeInTheDocument();
  },
};