import React from "react";
import { within, expect } from "storybook/test";
import { Story, testImageSrc, testAlt, testAdditionalText, selectors } from "./_ImgWithLoader.default";

export const AllProps: Story = {
  args: {
    src: testImageSrc,
    alt: testAlt,
    shouldShow: true,
    isLoading: false,
    showMediaType: true,
    mediaType: "video",
    additionalText: testAdditionalText,
    useBorderRadius: true,
    width: "300px",
    height: "200px",
  },
  play: async ({ canvasElement }) => {
    // Check that the component renders
    await expect(canvasElement).toBeInTheDocument();

    // Check that skeleton is present
    const skeleton = canvasElement.querySelector('[data-testid="Skeleton"]');
    expect(skeleton).toBeInTheDocument();

    // Check that image is present
    const image = canvasElement.querySelector('img');
    expect(image).toBeInTheDocument();
  },
};