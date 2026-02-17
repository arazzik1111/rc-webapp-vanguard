import React, { useRef } from "react";
import { DropdownMenu } from "../DropdownMenu";
import { Button, ButtonSizes, ButtonTypes } from "@vanguard/Button/Button";
import { IconNames } from "@vanguard/Icon/IconNames";
import { useToggle } from "../../../custom-hooks/useToggle";
import { within, expect } from "storybook/test";
import { Story, defaultItems } from "./_DropdownMenu.default";

export const WithPlacementBottomEnd: Story = {
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
          Menu Bottom End
        </Button>
        <DropdownMenu
          anchorEl={menuAnchorEl}
          isOpen={menuIsOpen}
          toggleIsOpen={toggleMenuIsOpen}
          items={defaultItems}
          placement="bottom-end"
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