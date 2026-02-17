import React from "react";
import { InfoBox } from "../InfoBox";
import { Story, createMockAction, selectors } from "./_InfoBox.default";
import { within, expect, userEvent } from "storybook/test";

export const WithLinks: Story = {
  args: {
    title: "InfoBox Title",
    description: "<link>Google My Business</link> restricts description editing for lodging locations.",
    links: {
      link: {
        text: "",
        onClick: createMockAction(),
      },
    },
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link", { name: "Google My Business" });
    await expect(link).toBeInTheDocument();
    await userEvent.click(link);
    await expect(args.links.link.onClick).toHaveBeenCalled();
  },
};