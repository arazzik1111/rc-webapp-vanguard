import React from "react";
import { ActionCard } from "../ActionCard";
import { Story, testChildren, mockActions } from "./_ActionCard.default.tsx";
import { within, expect, userEvent } from "storybook/test";

export const WithActions: Story = {
  args: {
    children: testChildren,
    actions: mockActions,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Test Content")).toBeVisible();
    await expect(canvas.getByText("Primary Action 1")).toBeVisible();
    await expect(canvas.getByText("Primary Action 2")).toBeVisible();

    await userEvent.click(canvas.getByText("Primary Action 1"));
    await expect(mockActions[0].cta).toHaveBeenCalled();

    await userEvent.click(canvas.getByText("Primary Action 2"));
    await expect(mockActions[1].cta).toHaveBeenCalled();
  },
};