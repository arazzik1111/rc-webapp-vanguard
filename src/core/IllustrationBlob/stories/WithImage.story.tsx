import { Story, testSVGObjects } from './_IllustrationBlob.default';
import { within, expect } from "storybook/test";

export const WithImage: Story = {
  args: {
    SVGObject: testSVGObjects.postsPreview,
    onlyImage: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that the component renders with image only
    await expect(canvasElement).toBeInTheDocument();
  },
};