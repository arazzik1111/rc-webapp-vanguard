import React from "react";
import { AssetPreloader } from "../AssetPreloader";
import { within, expect } from "storybook/test";
import { Story, testIcons } from "./_AssetPreloader.default";

/**
 * WithIcons story for AssetPreloader.
 * Demonstrates preloading specific icons. The component renders Icon components inside a hidden span
 * to preload the SVG assets. No visible output is shown as the span is positioned off-screen.
 */
export const WithIcons: Story = {
  args: {
    icons: testIcons,
  },
  render: (args) => (
    <div>
      <AssetPreloader {...args} />
      <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
        <h3>AssetPreloader with Icons</h3>
        <p>Demonstrates preloading specific icons: {testIcons.join(', ')}.</p>
        <p>The component renders Icon components inside a hidden span to preload the SVG assets.</p>
        <p><strong>Note:</strong> No visible output is shown in the story canvas as the component is designed to work invisibly.</p>
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const preloader = canvasElement.querySelector("span");
    await expect(preloader).toBeInTheDocument();
    // Component accepts icons prop without error
  },
};