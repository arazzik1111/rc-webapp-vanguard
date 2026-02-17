import React from "react";
import { Toolbar, Typography } from "@mui/material";
import { within, expect } from "storybook/test";
import { Story, testToolbarContent } from "./_AppBar.default";
import { AppBar } from "../AppBar";

export const WithElevation: Story = {
  args: {
    elevation: 8,
  },
  render: (args) => (
    <AppBar {...args}>
      <Toolbar>
        <Typography variant="h6" component="div">
          {testToolbarContent.elevated}
        </Typography>
      </Toolbar>
    </AppBar>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByText(testToolbarContent.elevated);
    await expect(title).toBeInTheDocument();
  },
};