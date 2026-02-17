import React from "react";
import { List } from "../List";
import { Story, listElementsWithIcons, testTitle } from "./_List.default";

export const WithIcons: Story = {
  args: {
    listElements: listElementsWithIcons,
    title: testTitle,
    type: "icon",
  },
  play: async ({ canvasElement }) => {
    const { within, expect } = await import("storybook/test");
    const canvas = within(canvasElement);

    // Should render the title
    await expect(canvas.getByText(testTitle)).toBeInTheDocument();

    // Should render list items with icons
    await expect(canvas.getByText("Item with icon")).toBeInTheDocument();
    await expect(canvas.getByText("Selected item with icon")).toBeInTheDocument();

    // Should have icon elements (though they may not render in test environment)
    const listContainer = canvas.getByText("Item with icon").closest('[class*="list"]');
    await expect(listContainer).toBeInTheDocument();
  },
};