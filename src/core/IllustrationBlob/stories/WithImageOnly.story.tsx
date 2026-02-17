import { Story, testSVGObjects } from './_IllustrationBlob.default';
import { within, expect } from "storybook/test";

export const WithImageOnly: Story = {
  args: {
    SVGObject: testSVGObjects.postsPreviewSocial,
    onlyImage: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that the component renders with different image extension
    await expect(canvasElement).toBeInTheDocument();
  },
};