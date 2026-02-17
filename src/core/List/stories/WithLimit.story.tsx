import React from "react";
import { List } from "../List";
import { Story, extendedListElements, testTitle, testLimit, createMockOnShowMore, createMockOnShowLess } from "./_List.default";

export const WithLimit: Story = {
  args: {
    listElements: extendedListElements,
    title: testTitle,
    type: "numerical",
    limit: testLimit,
    onShowMore: createMockOnShowMore(),
    onShowLess: createMockOnShowLess(),
  },
  play: async ({ canvasElement }) => {
    const { within, expect } = await import("storybook/test");
    const canvas = within(canvasElement);

    // Should render the title
    await expect(canvas.getByText(testTitle)).toBeInTheDocument();

    // Should render only limited items initially
    await expect(canvas.getByText("First element")).toBeInTheDocument();
    await expect(canvas.getByText("Second element")).toBeInTheDocument();
    await expect(canvas.getByText("Third element")).toBeInTheDocument();

    // Should show "Show all features" button when there are more items
    await expect(canvas.getByText("Show all features")).toBeInTheDocument();
  },
};