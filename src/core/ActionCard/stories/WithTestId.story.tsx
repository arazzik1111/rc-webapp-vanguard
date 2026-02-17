import React from "react";
import { ActionCard } from "../ActionCard";
import { Story, testChildren, selectors } from "./_ActionCard.default.tsx";
import { within, expect } from "storybook/test";

export const WithTestId: Story = {
  args: {
    children: testChildren,
    testId: "custom-test-id",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByTestId(selectors.card);
    await expect(card).toBeVisible();
  },
};