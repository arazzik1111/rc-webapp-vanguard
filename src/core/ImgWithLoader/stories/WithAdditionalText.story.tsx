import React from "react";
import { within, expect } from "storybook/test";
import { Story, testImageSrc, testAlt, testAdditionalText, selectors } from "./_ImgWithLoader.default";

export const WithAdditionalText: Story = {
  args: {
    src: testImageSrc,
    alt: testAlt,
    showMediaType: true,
    additionalText: testAdditionalText,
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