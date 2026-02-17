import React from "react";
import { within, expect } from "storybook/test";
import { Story, testChildren, testIds } from "./_ComponentContainer.default";

let capturedRef: HTMLDivElement | null = null;

const refCallback = (node: HTMLDivElement | null) => {
  capturedRef = node;
};

export const WithRef: Story = {
  args: {
    innerRef: refCallback,
    children: testChildren.withRef,
    testId: testIds.withRef,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId(testIds.withRef);
    await expect(container).toBeInTheDocument();
    // The ref callback should have been called during render
    await expect(capturedRef).not.toBeNull();
  },
};