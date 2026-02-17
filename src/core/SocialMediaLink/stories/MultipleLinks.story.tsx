import React from "react";
import { SocialMediaLink } from "../SocialMediaLink";
import { Story, testUrls } from "./_SocialMediaLink.default";
import { within, expect } from "storybook/test";

export const MultipleLinks: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
      <SocialMediaLink network="facebook" url={testUrls.facebook} />
      <SocialMediaLink network="instagram" url={testUrls.instagram} />
      <SocialMediaLink network="youtube" url={testUrls.youtube} />
      <SocialMediaLink network="linkedin" url={testUrls.linkedin} />
      <SocialMediaLink network="pinterest" url={testUrls.pinterest} />
      <SocialMediaLink network="tiktok" url={testUrls.tiktok} />
      <SocialMediaLink network="twitter" url={testUrls.twitter} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const links = canvas.getAllByRole("link");

    await expect(links).toHaveLength(7);
    await expect(links[0]).toHaveAttribute("href", testUrls.facebook);
    await expect(links[1]).toHaveAttribute("href", testUrls.instagram);
    await expect(links[2]).toHaveAttribute("href", testUrls.youtube);
  },
};