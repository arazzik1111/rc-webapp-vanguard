import { Story, testUrls, testNetworks } from "./_SocialMediaLink.default";
import { within, expect } from "storybook/test";

export const Instagram: Story = {
  args: {
    network: testNetworks.instagram,
    url: testUrls.instagram,
    testId: "social-media-link-instagram",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByTestId("social-media-link-instagram");

    await expect(link).toBeInTheDocument();
    await expect(link).toHaveAttribute("href", testUrls.instagram);
  },
};