import React from "react";
import { Button, ButtonTypes } from "../Button";
import { userEvent, within, expect, fn } from "storybook/test";
import { ButtonStory } from "./_Button.default";

// Tests for the Button On Mouse Down Story
export const ButtonOnMouseDown: ButtonStory = {
  args: {
    type: ButtonTypes.primary,
    children: "Click Me",
    testId: "button-mousedown",
    onClick: fn(),
    onMouseDown: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Verify the button is rendered
    const button = canvas.getByRole("button", { name: "Click Me" });
    await expect(button).toBeInTheDocument();

    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
    await expect(args.onMouseDown).toHaveBeenCalledTimes(1);

    // Verify the button is not disabled
    await expect(button).not.toBeDisabled();
  },
};