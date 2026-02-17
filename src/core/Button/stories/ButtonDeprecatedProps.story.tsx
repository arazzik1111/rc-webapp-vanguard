import React from "react";
import { Button, ButtonTypes } from "../Button";
import { userEvent, within, expect, fn } from "storybook/test";
import { ButtonStory } from "./_Button.default";

// Tests for the Button Deprecated Props Story
export const ButtonDeprecatedProps: ButtonStory = {
  args: {
    type: ButtonTypes.primary,
    children: "Deprecated Button",
    color: "#ff0000",
    hoverColor: "#00ff00",
    testId: "button-deprecated",
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Verify the button is rendered
    const button = canvas.getByRole("button", { name: "Deprecated Button" });
    await expect(button).toBeInTheDocument();

    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);

    // Verify the button is not disabled
    await expect(button).not.toBeDisabled();
  },
};