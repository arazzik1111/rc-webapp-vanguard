import React from "react";
import { within, expect } from "storybook/test";
import { Story } from "./_TabPanel.default";

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Test that the tab panel renders successfully
    const tabPanel = canvas.getByRole('tabpanel');
    await expect(tabPanel).toBeInTheDocument();
  },
};