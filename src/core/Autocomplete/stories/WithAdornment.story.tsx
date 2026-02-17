import React from "react";
import { Autocomplete } from "../Autocomplete";
import { within, expect } from "storybook/test";
import { Story, countriesList, adornmentIcons } from "./_Autocomplete.default";

/**
 * Autocomplete with adornment.
 * Tests adornment prop with flag icons.
 */
export const WithAdornment: Story = {
  args: {
    placeholder: "Pick a country...",
    options: countriesList,
    optionKey: "title",
    value: countriesList[1],
    adornment: adornmentIcons,
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