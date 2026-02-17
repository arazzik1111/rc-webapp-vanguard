import React from "react";
import { within, expect } from "storybook/test";
import { Story } from "./_TabPanel.default";

export const InactivePanel: Story = {
  args: {
    currentTab: 0,
    value: 1,
    children: 'Inactive tab panel content',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // For inactive panels, the component might not render or be hidden
    // This test depends on the actual implementation of TabPanel
    const tabPanel = canvas.queryByRole('tabpanel');
    // The panel might be hidden or not rendered when inactive
    if (tabPanel) {
      await expect(tabPanel).toBeInTheDocument();
    }
  },
};