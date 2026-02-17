import React, { useState } from "react";
import { Button } from "../Button";
import { userEvent, within, expect, fn } from "storybook/test";
import { ButtonStory, waitForDebounce } from "./_Button.default";

// Tests for Debounced Button
export const ButtonDebounce: ButtonStory = {
  args: {
    onClick: fn(),
  },
  render: (args) => {
    const [clickCount, setClickCount] = useState(0);

    return (
      <Button
        {...args}
        debounce={500}
        onClick={(e) => {
          setClickCount(prevCount => prevCount + 1);
          args.onClick(e);
        }}
      >
        {`${clickCount} click(s)`}
      </Button>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Verify the button is rendered
    let button = canvas.getByRole("button", { name: "0 click(s)" });
    await expect(button).toBeInTheDocument();

    // Click the button, verify that it triggers a single click event
    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);

    // Wait for the debounce delay to pass (1000ms + a small buffer)
    await waitForDebounce(550);
    
    // After waiting, click again and verify it registers a new click
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  },
};