import { Story, testUrls, testNetworks } from "./_SocialMediaLink.default";
import { within, expect } from "storybook/test";

export const LinkedIn: Story = {
  args: {
    network: testNetworks.linkedin,
    url: testUrls.linkedin,
    testId: "social-media-link-linkedin",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByTestId("social-media-link-linkedin");

    await expect(link).toBeInTheDocument();
    await expect(link).toHaveAttribute("href", testUrls.linkedin);
  },
};