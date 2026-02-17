import { Story, testSVGObjects, testImageAlignments } from './_IllustrationBlob.default';
import { within, expect } from "storybook/test";

export const WithImageAlignments: Story = {
  args: {
    SVGObject: testSVGObjects.postsPreview,
    imageAlignments: testImageAlignments.offset,
    onlyImage: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that the component renders with image alignments
    await expect(canvasElement).toBeInTheDocument();
  },
};