import React from "react";
import { within, expect } from "storybook/test";
import { Story, testImageSrc, testAlt, selectors } from "./_ImgWithLoader.default";

export const Hidden: Story = {
  args: {
    src: testImageSrc,
    alt: testAlt,
    shouldShow: false,
  },
  play: async ({ canvasElement }) => {
    // Check that the component renders
    await expect(canvasElement).toBeInTheDocument();

    // The ImgWithLoader component itself should not render when shouldShow is false
    // But SbDecorator wrapper elements will still be there
    const imgWithLoaderContent = canvasElement.querySelector('img, [data-testid="Skeleton"]');
    expect(imgWithLoaderContent).toBeNull();
  },
};