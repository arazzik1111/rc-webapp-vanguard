import React from "react";
import { Button, ButtonTypes } from "../Button";
import styles from "../Button.module.scss"
import { userEvent, within, expect, fn } from "storybook/test";
import { ButtonStory, testIcons, selectors } from "./_Button.default";

// Tests for the Button With Icon Story
export const ButtonWithIcon: ButtonStory = {
  args: {
    type: ButtonTypes.primary,
    children: "Save Document",
    icon: testIcons.save,
    iconPosition: "left",
    testId: "button-with-icon",
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Verify the button is rendered
    const button = canvas.getByRole("button", { name: "Save Document" });
    await expect(button).toBeInTheDocument();

    // Verify the button has icon
    const buttonIcon = await canvas.findByTestId("button-with-icon_icon")
    await expect(buttonIcon).toBeInTheDocument();

    // Verify the button has left icon styling
    await expect(button).toHaveClass(styles.hasIconLeft);

    // Verify the button text is present
    const buttonText = canvas.getByText("Save Document");
    await expect(buttonText).toBeInTheDocument();

    // Test click functionality
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);

    // Verify the button is not disabled
    await expect(button).not.toBeDisabled();
  },
};