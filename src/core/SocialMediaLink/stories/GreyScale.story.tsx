import { Story, testNetworks } from "./_SocialMediaLink.default";
import { within, expect } from "storybook/test";

export const GreyScale: Story = {
  args: {
    network: testNetworks.facebook,
    greyScale: true,
    testId: "social-media-link-grayscale",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByTestId("social-media-link-grayscale");

    await expect(link).toBeInTheDocument();
  },
};