import React from "react";
import { AssetPreloader } from "../AssetPreloader";
import { within, expect } from "storybook/test";
import { Story, testAvatars } from "./_AssetPreloader.default";

/**
 * WithAvatars story for AssetPreloader.
 * Demonstrates preloading specific avatar icons. The component renders Avatar components inside a hidden span
 * to preload the SVG assets for avatars. No visible output is shown as the span is positioned off-screen.
 */
export const WithAvatars: Story = {
  args: {
    avatars: testAvatars,
  },
  render: (args) => (
    <div>
      <AssetPreloader {...args} />
      <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
        <h3>AssetPreloader with Avatars</h3>
        <p>Demonstrates preloading specific avatar icons: {testAvatars.join(', ')}.</p>
        <p>The component renders Avatar components inside a hidden span to preload the SVG assets for avatars.</p>
        <p><strong>Note:</strong> No visible output is shown in the story canvas as the component is designed to work invisibly.</p>
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const preloader = canvasElement.querySelector("span");
    await expect(preloader).toBeInTheDocument();
    // Check that avatars are rendered
    const avatars = preloader?.querySelectorAll("div");
    await expect(avatars?.length).toBe(testAvatars.length);
  },
};