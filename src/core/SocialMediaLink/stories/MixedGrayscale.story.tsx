import React from "react";
import { SocialMediaLink } from "../SocialMediaLink";
import { Story, testUrls } from "./_SocialMediaLink.default";
import { within, expect } from "storybook/test";

export const MixedGrayscale: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "4px", alignItems: "center", flexWrap: "wrap" }}>
      <SocialMediaLink network="facebook" url={testUrls.facebook} />
      <SocialMediaLink network="youtube" url={testUrls.youtube} />
      <SocialMediaLink network="twitter" url={testUrls.twitter} />
      <SocialMediaLink network="pinterest" url={testUrls.pinterest} />
      <SocialMediaLink network="instagram" greyScale />
      <SocialMediaLink network="linkedin" greyScale />
      <SocialMediaLink network="tiktok" greyScale />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const links = canvas.getAllByRole("link");

    await expect(links).toHaveLength(4);
    await expect(links[0]).toHaveAttribute("href", testUrls.facebook);
    await expect(links[1]).toHaveAttribute("href", testUrls.youtube);
  },
};