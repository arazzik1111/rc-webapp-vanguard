import React, { useRef } from "react";
import { DropdownMenu } from "../DropdownMenu";
import { Button, ButtonSizes, ButtonTypes } from "@vanguard/Button/Button";
import { IconNames } from "@vanguard/Icon/IconNames";
import { useToggle } from "../../../custom-hooks/useToggle";
import { within, expect, userEvent } from "storybook/test";
import { Story, itemsWithIcons } from "./_DropdownMenu.default";

export const WithIcons: Story = {
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
          Menu with Icons
        </Button>
        <DropdownMenu
          anchorEl={menuAnchorEl}
          isOpen={menuIsOpen}
          toggleIsOpen={toggleMenuIsOpen}
          items={itemsWithIcons}
        />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toBeInTheDocument();
  },
};