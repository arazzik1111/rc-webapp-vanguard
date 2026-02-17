import React from "react";
import { SocialMediaLink } from "../SocialMediaLink";
import { Story, testUrls } from "./_SocialMediaLink.default";
import { within, expect } from "storybook/test";

export const AutoDetectNetwork: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "4px", alignItems: "center", flexWrap: "wrap" }}>
      <SocialMediaLink url={testUrls.facebook} />
      <SocialMediaLink url={testUrls.instagram} />
      <SocialMediaLink url={testUrls.youtube} />
      <SocialMediaLink url={testUrls.linkedin} />
      <SocialMediaLink url={testUrls.pinterest} />
      <SocialMediaLink url={testUrls.tiktok} />
      <SocialMediaLink url={testUrls.twitter} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const links = canvas.getAllByRole("link");

    await expect(links).toHaveLength(7);
    await expect(links[0]).toHaveAttribute("href", testUrls.facebook);
    await expect(links[1]).toHaveAttribute("href", testUrls.instagram);
  },
};