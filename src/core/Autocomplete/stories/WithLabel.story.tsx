import React from "react";
import { Autocomplete } from "../Autocomplete";
import { within, expect } from "storybook/test";
import { Story, testOptions } from "./_Autocomplete.default";

/**
 * Autocomplete with label.
 * Tests label, labelType, and required props.
 */
export const WithLabel: Story = {
  args: {
    label: "Choose a fruit",
    labelType: "floating",
    required: true,
    placeholder: "Select a fruit...",
    options: testOptions,
    optionKey: "title",
    onChange: (event, value) => console.log("Selected:", value),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await expect(input).toBeInTheDocument();
    // Label should be present
    const label = canvas.getByText("Choose a fruit");
    await expect(label).toBeInTheDocument();
  },
};