import React from "react";
import { List } from "../List";
import { Story, sampleListElements, testTitle, testHeaderNote, testFooterNote } from "./_List.default";

export const Default: Story = {
  args: {
    listElements: sampleListElements,
    title: testTitle,
    type: "alphabetical",
    headerNote: testHeaderNote,
    footerNote: testFooterNote,
  },
  play: async ({ canvasElement }) => {
    const { within, expect } = await import("storybook/test");
    const canvas = within(canvasElement);

    // Should render the title
    await expect(canvas.getByText(testTitle)).toBeInTheDocument();

    // Should render the header note
    await expect(canvas.getByText(testHeaderNote)).toBeInTheDocument();

    // Should render list items
    await expect(canvas.getByText("First item")).toBeInTheDocument();
    await expect(canvas.getByText("Second item")).toBeInTheDocument();
    await expect(canvas.getByText("Third item")).toBeInTheDocument();

    // Should render the footer note
    await expect(canvas.getByText(testFooterNote)).toBeInTheDocument();
  },
};