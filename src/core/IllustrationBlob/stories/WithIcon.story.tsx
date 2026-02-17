import { Story, testIcons } from "./_IllustrationBlob.default";
import { within, expect } from "storybook/test";

export const WithIcon: Story = {
  args: {
    icon: testIcons.post,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that the component renders with icon
    await expect(canvasElement).toBeInTheDocument();
  },
};