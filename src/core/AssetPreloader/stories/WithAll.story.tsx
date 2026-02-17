import React from "react";
import { AssetPreloader } from "../AssetPreloader";
import { within, expect } from "storybook/test";
import { Story, testIcons, testAvatars, testImages } from "./_AssetPreloader.default";

/**
 * WithAll story for AssetPreloader.
 * Demonstrates preloading all types of assets: icons, avatars, and images.
 * The component renders Icon and Avatar components inside a hidden span to preload SVG assets.
 * Images prop is accepted but not currently rendered. No visible output is shown.
 */
export const WithAll: Story = {
  args: {
    icons: testIcons,
    avatars: testAvatars,
    images: testImages,
  },
  render: (args) => (
    <div>
      <AssetPreloader {...args} />
      <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
        <h3>AssetPreloader with All Assets</h3>
        <p>Demonstrates preloading all types of assets:</p>
        <ul>
          <li><strong>Icons:</strong> {testIcons.join(', ')}</li>
          <li><strong>Avatars:</strong> {testAvatars.join(', ')}</li>
          <li><strong>Images:</strong> {testImages.join(', ')}</li>
        </ul>
        <p>The component renders Icon and Avatar components inside a hidden span to preload SVG assets.</p>
        <p>Images prop is accepted but not currently rendered.</p>
        <p><strong>Note:</strong> No visible output is shown in the story canvas as the component is designed to work invisibly.</p>
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const preloader = canvasElement.querySelector("span");
    await expect(preloader).toBeInTheDocument();
    // Component accepts all props without error
  },
};