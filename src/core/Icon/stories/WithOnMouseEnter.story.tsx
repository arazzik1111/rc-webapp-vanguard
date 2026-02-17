import React from "react";
import { within, expect, userEvent, waitFor } from "storybook/test";
import { Story, testIcon, mockOnMouseEnter } from "./_Icon.default";

export const WithOnMouseEnter: Story = {
  args: {
    children: testIcon,
    onMouseEnter: mockOnMouseEnter,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    let icon: HTMLElement;
    await waitFor(() => {
      icon = canvas.getByRole("figure");
      expect(icon).toBeInTheDocument();
    });
    await userEvent.hover(icon);
    await expect(mockOnMouseEnter).toHaveBeenCalled();
  },
};