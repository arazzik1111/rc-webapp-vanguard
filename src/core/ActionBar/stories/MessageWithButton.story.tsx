import React from "react";
import { within, expect, userEvent } from "storybook/test";
import { Story, selectors } from "./_ActionBar.default";

export const MessageWithButton: Story = {
  args: {
    show: true,
    templateProps: {
      template: "message",
      type: "warning",
      description: "This message has a button",
      button: {
        text: "Click me",
        onClick: () => console.log("Button clicked"),
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId(selectors.container);
    await expect(container).toBeInTheDocument();
    // Check that button is rendered
    const button = canvas.getByRole("button", { name: "Click me" });
    await expect(button).toBeInTheDocument();
    // Test button click
    await userEvent.click(button);
  },
};