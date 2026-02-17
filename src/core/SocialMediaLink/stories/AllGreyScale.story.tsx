import React from "react";
import { SocialMediaLink } from "../SocialMediaLink";
import { Story } from "./_SocialMediaLink.default";
import { within, expect } from "storybook/test";

export const AllGreyScale: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "4px", alignItems: "center", flexWrap: "wrap" }}>
      <SocialMediaLink network="facebook" testId={"social-media-link-facebook"} greyScale />
      <SocialMediaLink network="youtube" greyScale />
      <SocialMediaLink network="twitter" greyScale />
      <SocialMediaLink network="pinterest" greyScale />
      <SocialMediaLink network="instagram" greyScale />
      <SocialMediaLink network="linkedin" greyScale />
      <SocialMediaLink network="tiktok" greyScale />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByTestId("social-media-link-facebook");

    await expect(link).toBeInTheDocument();
  },
};