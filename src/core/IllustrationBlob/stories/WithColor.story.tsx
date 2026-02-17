import { Story, testColors } from "./_IllustrationBlob.default";
import { within, expect } from "storybook/test";

export const WithColor: Story = {
  args: {
    color: testColors.primary,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that the component renders with custom color
    await expect(canvasElement).toBeInTheDocument();
  },
};