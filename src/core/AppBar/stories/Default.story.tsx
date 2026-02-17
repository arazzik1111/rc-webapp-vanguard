import React from "react";
import { Toolbar, Typography } from "@mui/material";
import { within, expect } from "storybook/test";
import { Story, testToolbarContent } from "./_AppBar.default";
import { AppBar } from "../AppBar";

export const Default: Story = {
  render: (args) => (
    <AppBar {...args}>
      <Toolbar>
        <Typography variant="h6" component="div">
          {testToolbarContent.default}
        </Typography>
      </Toolbar>
    </AppBar>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByText(testToolbarContent.default);
    await expect(container).toBeInTheDocument();
  },
};