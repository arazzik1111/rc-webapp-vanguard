import React from "react";
import { Button, ButtonTypes } from "../Button";
import styles from "../Button.module.scss";
import { userEvent, within, expect, fn, waitFor } from "storybook/test";
import { ButtonStory, testIcons, selectors } from "./_Button.default";

// Tests for the Icon Only Button Story
export const ButtonIconOnly: ButtonStory = {
  args: {
    type: ButtonTypes.primary,
    children: null,
    icon: testIcons.save,
    iconPosition: "left",
    testId: 'button-icon-only',
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Verify the button is rendered (use data-testid since there's no text)
    const button = canvasElement.querySelector('button[data-testid*="button"]');
    await expect(button).toBeInTheDocument();

    // Verify the button has icon
    const buttonIcon = await canvas.findByTestId('button-icon-only_icon');
   await expect(buttonIcon).toBeInTheDocument();

    // Verify the button has hidden label class (since children is null)
    await expect(button).toHaveClass(styles.buttonLabelHidden);

    // Verify the button has left icon styling
    await expect(button).toHaveClass(styles.hasIconLeft);

    // Verify no text content is present
    const buttonText = canvasElement.querySelector('.'+styles.buttonText);
    await expect(buttonText).not.toBeInTheDocument();

    // Test click functionality
    await userEvent.click(button!);
    await expect(args.onClick).toHaveBeenCalledTimes(1);

    // Verify the button is not disabled
    await expect(button).not.toBeDisabled();
  },
};