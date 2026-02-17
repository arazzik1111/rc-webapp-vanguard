import React from "react";
import { Button, ButtonTypes } from "../Button";
import { userEvent, within, expect, fn } from "storybook/test";
import { ButtonStory, testIcons } from "./_Button.default";

// Tests for the Button Icon Has Circle Story
export const ButtonIconHasCircle: ButtonStory = {
  args: {
    type: ButtonTypes.primary,
    children: "Save",
    icon: testIcons.save,
    iconPosition: "left",
    iconHasCircle: true,
    testId: "button-icon-circle",
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Verify the button is rendered
    const button = canvas.getByRole("button", { name: "Save" });
    await expect(button).toBeInTheDocument();

    // Verify the button has icon
    const buttonIcon = await canvas.findByTestId("button-icon-circle_icon");
    await expect(buttonIcon).toBeInTheDocument();

    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);

    // Verify the button is not disabled
    await expect(button).not.toBeDisabled();
  },
};