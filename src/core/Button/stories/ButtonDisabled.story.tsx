import React from "react";
import { Button, ButtonTypes } from "../Button";
import { userEvent, within, expect, fn } from "storybook/test";
import { ButtonStory } from "./_Button.default";

// Tests for the Disabled Button
export const ButtonDisabled: ButtonStory = {
  args: {
    type: ButtonTypes.primary,
    children: "Disabled",
    disabled: true,
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Verify the button is rendered
    const button = canvas.getByRole("button", { name: "Disabled" });
    await expect(button).toBeInTheDocument();

    // Verify the button is disabled
    await expect(button).toHaveAttribute("disabled");
    await userEvent.click(button); // Clicking should not trigger any action
    await expect(button).toBeDisabled();
    await expect(args.onClick).toHaveBeenCalledTimes(0);
  },
};