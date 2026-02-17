import React from "react";
import { Toolbar, Typography } from "@mui/material";
import { within, expect } from "storybook/test";
import { Story, testToolbarContent } from "./_AppBar.default";
import { AppBar } from "../AppBar";

export const WithTitle: Story = {
  args: {
    position: "static",
    color: "primary",
  },
  render: (args) => (
    <AppBar {...args}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {testToolbarContent.withTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByText(testToolbarContent.withTitle);
    await expect(title).toBeInTheDocument();
  },
};