import React from "react";
import { TextField } from "@mui/material";
import { within, expect } from "storybook/test";
import { Story } from "./_FormControl.default";
import { FormControl } from "../FormControl";

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: "400px", padding: "20px" }}>
      <FormControl fullWidth margin="normal">
        <TextField label="Full Width Field" variant="outlined" />
      </FormControl>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textField = canvas.getByLabelText("Full Width Field");
    await expect(textField).toBeInTheDocument();
  },
};