import React from "react";
import { within, expect, userEvent, waitFor } from "storybook/test";
import { Story, testIcon, mockOnClick } from "./_Icon.default";

export const WithOnClick: Story = {
  args: {
    children: testIcon,
    onClick: mockOnClick,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    let icon: HTMLElement;
    await waitFor(() => {
      icon = canvas.getByRole("figure");
      expect(icon).toBeInTheDocument();
    });
    await userEvent.click(icon);
    await expect(mockOnClick).toHaveBeenCalled();
  },
};