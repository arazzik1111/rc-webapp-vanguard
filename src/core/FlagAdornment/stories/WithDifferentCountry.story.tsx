import React from "react";
import { FlagAdornment } from "../FlagAdornment";
import { Story, testCountryCodes } from "./_FlagAdornment.default";
import { within, expect } from "storybook/test";

export const WithDifferentCountry: Story = {
  args: {
    countryCode: testCountryCodes.unitedStates,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that the flag image is rendered for US flag
    const flagImage = canvas.getByAltText("us flag");
    await expect(flagImage).toBeInTheDocument();

    // Check that the image has the correct dimensions
    await expect(flagImage).toHaveAttribute("width", "32");
    await expect(flagImage).toHaveAttribute("height", "24");
  },
};