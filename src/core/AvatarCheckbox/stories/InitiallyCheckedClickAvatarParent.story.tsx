import React from "react";
import { AvatarCheckbox } from "../AvatarCheckbox";
import { within, userEvent, expect } from "storybook/test";
import { Story, testIcons, createMockOnChange, selectors } from "./_AvatarCheckbox.default";

export const InitiallyCheckedClickAvatarParent: Story = {
  args: {
    icon: testIcons.facebook,
    checked: true,
    onChange: createMockOnChange(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();
    const avatarParent = await canvas.findByTestId(selectors.avatarCheckboxContainer);
    const checkbox = await canvas.findByTestId(selectors.vanguardCheckboxContainer);
    await user.click(avatarParent);
    await user.click(document.body);
    await expect(checkbox).not.toHaveClass("vanguard-checkbox-checked");
    await expect(args.onChange).toBeCalled();
  },
};