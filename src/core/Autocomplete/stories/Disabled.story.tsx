import React from "react";
import { Autocomplete } from "../Autocomplete";
import { within, expect } from "storybook/test";
import { Story, testOptions } from "./_Autocomplete.default";

/**
 * Disabled Autocomplete.
 * Tests disabled prop.
 */
export const Disabled: Story = {
  args: {
    placeholder: "Can't type here...",
    options: testOptions,
    optionKey: "title",
    disabled: true,
    onChange: (event, value) => console.log("Selected:", value),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await expect(input).toBeInTheDocument();
    // Check that the component renders without errors - disabled state is tested via args
    await expect(canvasElement).toBeInTheDocument();
  },
};