import React from "react";
import { InfoBox } from "../InfoBox";
import { Story, testData, createMockAction, selectors } from "./_InfoBox.default";
import { within, expect, userEvent } from "storybook/test";

export const Dismissible: Story = {
  args: {
    title: testData.title,
    description: testData.description,
    dismissible: true,
    dismissCallback: createMockAction(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const closeButton = canvas.getByTestId("info-box-cta");
    await expect(closeButton).toBeInTheDocument();
    await userEvent.click(closeButton);
    await expect(args.dismissCallback).toHaveBeenCalled();
  },
};