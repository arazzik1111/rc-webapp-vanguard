import React from "react";
import { Button, ButtonTypes } from "../Button";
import { userEvent, within, expect, fn } from "storybook/test";
import { useToggle } from "@custom-hooks/useToggle";
import { ButtonStory } from "./_Button.default";

// Tests for Shimmer Button
export const ButtonTypeShimmer: ButtonStory = {
  args: {
    type: ButtonTypes.shimmer,
    children: "Shimmering",
    onClick: fn(),
  },
  render: (args) => {
    const [disabled, toggleDisabled] = useToggle(false);

    return (
      <Button
        {...args}
        disabled={disabled}
        onClick={(e) => {
          toggleDisabled();
          args.onClick!(e);
        }}
      />
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Verify the button is rendered
    let button = canvas.getByRole("button", { name: "Shimmering" });
    await expect(button).toBeInTheDocument();

    // Verify the shimmer effect is applied
    let computedStyle = window.getComputedStyle(button, "::before");
    await expect(computedStyle).toBeTruthy();
    await expect(computedStyle.content).not.toBe("none");
    await expect(computedStyle.background).toContain("linear-gradient");

    await userEvent.click(button); // Clicking should not trigger any action
    await expect(args.onClick).toHaveBeenCalledTimes(1);

    await expect(button).toBeDisabled();

    await userEvent.click(button); // Clicking should not trigger any action

    // Verify the shimmer effect is removed when the button is disabled
    await expect(button).toBeDisabled();
    await expect(args.onClick).toHaveBeenCalledTimes(1);
    await expect(computedStyle.content).toBe("none");
  },
};