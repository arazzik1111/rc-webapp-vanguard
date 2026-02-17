import React from "react";
import { Toolbar, Typography } from "@mui/material";
import { within, expect } from "storybook/test";
import { Story, testToolbarContent } from "./_AppBar.default";
import { AppBar } from "../AppBar";

export const WithFixedPosition: Story = {
  args: {
    position: "fixed",
  },
  render: (args) => (
    <AppBar {...args}>
      <Toolbar>
        <Typography variant="h6" component="div">
          {testToolbarContent.fixed}
        </Typography>
      </Toolbar>
    </AppBar>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByText(testToolbarContent.fixed);
    await expect(title).toBeInTheDocument();
  },
};