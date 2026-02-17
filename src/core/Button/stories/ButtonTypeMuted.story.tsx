import { Button, ButtonTypes } from "@vanguard/Button/Button";
import { userEvent, within, expect, fn } from "storybook/test";
import { ButtonStory, mutedButtonArgTypes, BUTTONS_EXCLUDED_CONTROLS_MUTED } from "./_Button.default";
import { disableControls } from "@test-utils/get-storybook-decorator";

// Tests for the Muted Button Story
export const ButtonTypeMuted: ButtonStory = {
  argTypes: {
    ...disableControls(BUTTONS_EXCLUDED_CONTROLS_MUTED),
    ...mutedButtonArgTypes,
  },
  args: {
    type: ButtonTypes.muted,
    children: "Click Me",
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Verify the button is rendered
    const button = canvas.getByRole("button", { name: "Click Me" });
    await expect(button).toBeInTheDocument();

    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);

    // Verify the button is not disabled
    await expect(button).not.toBeDisabled();
  },
};