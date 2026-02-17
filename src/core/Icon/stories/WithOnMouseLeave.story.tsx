import React from "react";
import { within, expect, userEvent, waitFor } from "storybook/test";
import { Story, testIcon, mockOnMouseLeave } from "./_Icon.default";

export const WithOnMouseLeave: Story = {
  args: {
    children: testIcon,
    onMouseLeave: mockOnMouseLeave,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    let icon: HTMLElement;
    await waitFor(() => {
      icon = canvas.getByRole("figure");
      expect(icon).toBeInTheDocument();
    });
    await userEvent.hover(icon.parentElement);
    await userEvent.unhover(icon.parentElement);
    await expect(mockOnMouseLeave).toHaveBeenCalled();
  },
};