import React, { useState } from "react";
import { IconButton } from "../IconButton";
import { within, expect, userEvent } from "storybook/test";
import { Story, testIcons, createMockOnClick } from "./_IconButton.default";

export const SetActive: Story = {
  args: {
    icon: testIcons.star,
    isActive: true,
    onClick: createMockOnClick(),
  },
  render: (props) => {
    const [active, setActive] = useState(false);
    const setActiveState = () => {
      setActive((p) => !p);
      props.onClick?.();
    };
    return (
      <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "column", gap: 2 }}>
        <IconButton {...props} onClick={setActiveState} isActive={active} isDisabled={false} />
      </div>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};