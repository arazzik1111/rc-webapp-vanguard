import React from "react";
import { List } from "../List";
import { Story, sampleListElements, testTitle } from "./_List.default";

export const WithColumns: Story = {
  args: {
    listElements: sampleListElements,
    title: testTitle,
    type: "none",
    numberOfColumns: 2,
    columnsGap: 20,
  },
  play: async ({ canvasElement }) => {
    const { within, expect } = await import("storybook/test");
    const canvas = within(canvasElement);

    // Should render the title
    await expect(canvas.getByText(testTitle)).toBeInTheDocument();

    // Should render list items
    await expect(canvas.getByText("First item")).toBeInTheDocument();
    await expect(canvas.getByText("Second item")).toBeInTheDocument();
    await expect(canvas.getByText("Third item")).toBeInTheDocument();

    // The list container should exist
    const listContainer = canvas.getByText("First item").closest('[class*="list"]');
    await expect(listContainer).toBeInTheDocument();
  },
};