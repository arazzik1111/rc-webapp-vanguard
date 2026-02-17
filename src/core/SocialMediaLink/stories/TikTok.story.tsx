import { Story, testUrls, testNetworks } from "./_SocialMediaLink.default";
import { within, expect } from "storybook/test";

export const TikTok: Story = {
  args: {
    network: testNetworks.tiktok,
    url: testUrls.tiktok,
    testId: "social-media-link-tiktok",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByTestId("social-media-link-tiktok");

    await expect(link).toBeInTheDocument();
    await expect(link).toHaveAttribute("href", testUrls.tiktok);
  },
};