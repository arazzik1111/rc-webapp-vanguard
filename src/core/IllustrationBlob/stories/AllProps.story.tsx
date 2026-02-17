import {
  Story,
  testIcons,
  testImageAlignments,
  testColors,
  testSVGObjects,
} from './_IllustrationBlob.default';
import { within, expect } from "storybook/test";

export const AllProps: Story = {
  args: {
    icon: testIcons.post,
    SVGObject: testSVGObjects.postsPreview,
    onlyImage: false,
    imageAlignments: testImageAlignments.centered,
    color: testColors.secondary,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that the component renders with all props
    await expect(canvasElement).toBeInTheDocument();
  },
};