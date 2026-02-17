import React from "react";
import { InfoBox } from "../InfoBox";
import { Story, testData, createMockAction, selectors } from "./_InfoBox.default";
import { within, expect, userEvent } from "storybook/test";

export const WithPositiveButton: Story = {
  args: {
    title: testData.title,
    description: testData.description,
    positive: {
      cta: createMockAction(),
      text: "Confirm",
    },
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Confirm" });
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await expect(args.positive.cta).toHaveBeenCalled();
  },
};