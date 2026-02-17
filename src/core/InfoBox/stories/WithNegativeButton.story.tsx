import React from "react";
import { InfoBox } from "../InfoBox";
import { Story, testData, createMockAction, selectors } from "./_InfoBox.default";
import { within, expect, userEvent } from "storybook/test";

export const WithNegativeButton: Story = {
  args: {
    title: testData.title,
    description: testData.description,
    negative: {
      cta: createMockAction(),
      text: "Cancel",
    },
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Cancel" });
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await expect(args.negative.cta).toHaveBeenCalled();
  },
};