import React from "react";
import { LinkConditional } from "../LinkConditional";
import { Story, testChildren, createMockOnDeleteClick } from "./_LinkConditional.default.tsx";

export const WithChildFullWidth: Story = {
  args: {
    childVisible: true,
    children: testChildren,
    linkText: "Add Item",
    childFullWidth: true,
    onDeleteClick: createMockOnDeleteClick(),
  },
  play: async ({ canvasElement }) => {
    const { within, expect } = await import("storybook/test");
    const canvas = within(canvasElement);

    // Should render children when childVisible is true
    await expect(canvas.getByText("Test Child Content")).toBeInTheDocument();

    // Should have a container with the children
    const container = canvas.getByText("Test Child Content").parentElement;
    await expect(container).toBeInTheDocument();
    await expect(container?.className).toContain("container");

    // The container should have child-full-width class applied
    await expect(container?.className).toContain("child-full-width");
  },
};