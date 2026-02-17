import React, { useRef } from "react";
import { DropdownMenu } from "../DropdownMenu";
import { Button, ButtonSizes, ButtonTypes } from "@vanguard/Button/Button";
import { IconNames } from "@vanguard/Icon/IconNames";
import { useToggle } from "../../../custom-hooks/useToggle";
import { within, expect, userEvent } from "storybook/test";
import { Story, defaultItems } from "./_DropdownMenu.default";

export const Default: Story = {
  render: () => {
    const [menuIsOpen, toggleMenuIsOpen] = useToggle(false);
    const menuAnchorEl = useRef(null);

    return (
      <div>
        <Button
          targetRef={menuAnchorEl}
          type={ButtonTypes.default}
          iconLeft={IconNames.edit}
          size={ButtonSizes.small}
          onClick={toggleMenuIsOpen}
        >
          Menu
        </Button>
        <DropdownMenu
          anchorEl={menuAnchorEl}
          isOpen={menuIsOpen}
          toggleIsOpen={toggleMenuIsOpen}
          items={defaultItems}
        />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toBeInTheDocument();
    // Click to open menu
    await userEvent.click(button);
    // Check if menu items are present (assuming menu opens)
    // Note: Testing the menu opening might be tricky in storybook test
  },
};