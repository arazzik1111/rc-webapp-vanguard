import React from "react";
import { AssetPreloader } from "../AssetPreloader";
import { within, expect } from "storybook/test";
import { Story } from "./_AssetPreloader.default";

/**
 * Default story for AssetPreloader.
 * This is a technical component that preloads assets (icons, avatars, images) to improve performance.
 * It renders a hidden span element off-screen to load the assets without displaying anything visible.
 * The component accepts optional props for icons, avatars, and images to preload.
 */
export const Default: Story = {
  args: {},
  render: (args) => (
    <div>
      <AssetPreloader {...args} />
      <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
        <h3>AssetPreloader Component</h3>
        <p>This is a technical component that preloads assets (icons, avatars, images) to improve performance.</p>
        <p>It renders a hidden span element off-screen to load the assets without displaying anything visible.</p>
        <p>The component accepts optional props for icons, avatars, and images to preload.</p>
        <p><strong>Note:</strong> No visible output is shown in the story canvas as the component is designed to work invisibly.</p>
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // The component renders a hidden span for preloading assets
    const preloader = canvasElement.querySelector("span");
    await expect(preloader).toBeInTheDocument();
  },
};