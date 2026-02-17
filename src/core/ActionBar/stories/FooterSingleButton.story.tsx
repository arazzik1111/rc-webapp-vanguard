import React from "react";
import { within, expect, userEvent } from "storybook/test";
import { Story, selectors } from "./_ActionBar.default";

export const FooterSingleButton: Story = {
  args: {
    show: true,
    templateProps: {
      template: "footer",
      buttons: [
        { text: "Single Button", onClick: () => console.log("Single button clicked") },
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId(selectors.container);
    await expect(container).toBeInTheDocument();
    // Check that button is rendered
    const button = canvas.getByRole("button", { name: "Single Button" });
    await expect(button).toBeInTheDocument();
    // Test button click
    await userEvent.click(button);
  },
};