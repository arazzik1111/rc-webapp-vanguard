import React from "react";
import { Button, ButtonTypes } from "../Button";
import styles from '../Button.module.scss';
import { userEvent, within, expect, fn } from "storybook/test";
import { ButtonStory } from "./_Button.default";

// Tests for the Rounded Primary Button Story
export const ButtonRounded: ButtonStory = {
  args: {
    type: ButtonTypes.primary,
    children: "Rounded Button",
    rounded: true,
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Verify the button is rendered
    const button = canvas.getByRole("button", { name: "Rounded Button" });
    await expect(button).toBeInTheDocument();

    // Verify the button has rounded styling
    await expect(button).toHaveClass(styles.shapeRound);

    // Test click functionality
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);

    // Verify the button is not disabled
    await expect(button).not.toBeDisabled();
  },
};