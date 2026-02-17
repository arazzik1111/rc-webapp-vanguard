import { Story, testUrls, testNetworks } from "./_SocialMediaLink.default";
import { within, expect } from "storybook/test";

export const Facebook: Story = {
  args: {
    network: testNetworks.facebook,
    url: testUrls.facebook,
    testId: "social-media-link-facebook",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByTestId("social-media-link-facebook");

    await expect(link).toBeInTheDocument();
    await expect(link).toHaveAttribute("href", testUrls.facebook);
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
  },
};