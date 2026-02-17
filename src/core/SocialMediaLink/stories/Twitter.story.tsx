import { Story, testUrls, testNetworks } from "./_SocialMediaLink.default";
import { within, expect } from "storybook/test";

export const Twitter: Story = {
  args: {
    network: testNetworks.twitter,
    url: testUrls.twitter,
    testId: "social-media-link-twitter",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByTestId("social-media-link-twitter");

    await expect(link).toBeInTheDocument();
    await expect(link).toHaveAttribute("href", testUrls.twitter);
  },
};