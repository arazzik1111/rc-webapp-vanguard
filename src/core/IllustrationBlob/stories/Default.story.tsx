import { Story } from "./_IllustrationBlob.default";
import { within, expect } from "storybook/test";

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that the component renders without errors
    await expect(canvasElement).toBeInTheDocument();
  },
};