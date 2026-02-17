import { Story, testUrls, testNetworks } from "./_SocialMediaLink.default";
import { within, expect } from "storybook/test";

export const Pinterest: Story = {
  args: {
    network: testNetworks.pinterest,
    url: testUrls.pinterest,
    testId: "social-media-link-pinterest",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByTestId("social-media-link-pinterest");

    await expect(link).toBeInTheDocument();
    await expect(link).toHaveAttribute("href", testUrls.pinterest);
  },
};