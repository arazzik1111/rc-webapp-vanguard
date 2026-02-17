import React from "react";
import { within, expect, userEvent, waitFor } from "storybook/test";
import { Story, testIcon, testColors } from "./_Icon.default";

export const WithHoverColor: Story = {
  args: {
    children: testIcon,
    hoverColor: testColors.secondary,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    let icon: HTMLElement;
    await waitFor(() => {
      icon = canvas.getByRole("figure");
      expect(icon).toBeInTheDocument();
    });
    await userEvent.hover(icon);
    // Note: Testing hover color might require additional setup or checking CSS variables
  },
};