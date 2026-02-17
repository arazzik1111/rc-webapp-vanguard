import React from "react";
import { Button, ButtonTypes } from "../Button";
import { userEvent, within, expect, fn } from "storybook/test";
import { ButtonStory } from "./_Button.default";

// Tests for the Button With Replacements Story
export const ButtonWithReplacements: ButtonStory = {
  args: {
    type: ButtonTypes.primary,
    children: "Save {count} items",
    replacements: { count: "5" },
    testId: "button-replacements",
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Verify the button is rendered with replaced text
    const button = canvas.getByRole("button", { name: "Save 5 items" });
    await expect(button).toBeInTheDocument();

    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);

    // Verify the button is not disabled
    await expect(button).not.toBeDisabled();
  },
};