import React from "react";
import { Button, ButtonTypes } from "../Button";
import { userEvent, within, expect, fn } from "storybook/test";
import { ButtonStory } from "./_Button.default";

// Tests for the Button Text Wrap No Wrap Story
export const ButtonTextWrapNoWrap: ButtonStory = {
  args: {
    type: ButtonTypes.primary,
    children: "Very Long Button Text That Should Not Wrap",
    textWrap: "no-wrap",
    testId: "button-text-wrap",
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Verify the button is rendered
    const button = canvas.getByRole("button", { name: "Very Long Button Text That Should Not Wrap" });
    await expect(button).toBeInTheDocument();

    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);

    // Verify the button is not disabled
    await expect(button).not.toBeDisabled();
  },
};