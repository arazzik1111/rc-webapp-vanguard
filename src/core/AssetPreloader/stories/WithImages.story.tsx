import React from "react";
import { AssetPreloader } from "../AssetPreloader";
import { within, expect } from "storybook/test";
import { Story, testImages } from "./_AssetPreloader.default";

/**
 * WithImages story for AssetPreloader.
 * Demonstrates the images prop. Currently, the component does not render images but accepts the prop.
 * The component renders a hidden span for preloading assets. No visible output is shown.
 */
export const WithImages: Story = {
  args: {
    images: testImages,
  },
  render: (args) => (
    <div>
      <AssetPreloader {...args} />
      <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
        <h3>AssetPreloader with Images</h3>
        <p>Demonstrates the images prop with URLs: {testImages.join(', ')}.</p>
        <p>Currently, the component does not render images but accepts the prop for future implementation.</p>
        <p>The component renders a hidden span for preloading assets.</p>
        <p><strong>Note:</strong> No visible output is shown in the story canvas as the component is designed to work invisibly.</p>
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const preloader = canvasElement.querySelector("span");
    await expect(preloader).toBeInTheDocument();
    // Images prop is accepted but not rendered in current implementation
  },
};