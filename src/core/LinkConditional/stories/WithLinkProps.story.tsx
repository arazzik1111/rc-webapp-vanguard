import React from "react";
import { LinkConditional } from "../LinkConditional";
import { Story, testLinkText, testLinkProps } from "./_LinkConditional.default.tsx";

export const WithLinkProps: Story = {
  args: {
    childVisible: false,
    children: null,
    linkText: testLinkText,
    linkProps: testLinkProps,
  },
  play: async ({ canvasElement }) => {
    const { within, expect } = await import("storybook/test");
    const canvas = within(canvasElement);

    // Should render as a link with the provided props
    const link = canvas.getByRole("link", { name: testLinkText });
    await expect(link).toBeInTheDocument();
    await expect(link).toHaveAttribute("href", testLinkProps.href);
    await expect(link).toHaveAttribute("target", testLinkProps.target);
  },
};