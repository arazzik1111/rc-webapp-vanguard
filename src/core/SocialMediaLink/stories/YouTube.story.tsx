import { Story, testUrls, testNetworks } from "./_SocialMediaLink.default";
import { within, expect } from "storybook/test";

export const YouTube: Story = {
  args: {
    network: testNetworks.youtube,
    url: testUrls.youtube,
    testId: "social-media-link-youtube",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByTestId("social-media-link-youtube");

    await expect(link).toBeInTheDocument();
    await expect(link).toHaveAttribute("href", testUrls.youtube);
  },
};