import React from "react";
import { LinkConditional } from "../LinkConditional";
import { Story, testLinkText } from "./_LinkConditional.default.tsx";

export const Default: Story = {
  args: {
    childVisible: false,
    children: null,
    linkText: testLinkText,
  },
  play: async ({ canvasElement }) => {
    const { within, expect } = await import("storybook/test");
    const canvas = within(canvasElement);

    // Should render as a link when childVisible is false
    const link = canvas.getByRole("link", { name: testLinkText });
    await expect(link).toBeInTheDocument();
  },
};