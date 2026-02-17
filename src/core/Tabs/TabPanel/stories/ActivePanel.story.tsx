import React from "react";
import { within, expect } from "storybook/test";
import { Story } from "./_TabPanel.default";

export const ActivePanel: Story = {
  args: {
    currentTab: 1,
    value: 1,
    children: 'Active tab panel content',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tabPanel = canvas.getByRole('tabpanel');
    await expect(tabPanel).toBeInTheDocument();
    await expect(tabPanel).toHaveTextContent('Active tab panel content');
  },
};