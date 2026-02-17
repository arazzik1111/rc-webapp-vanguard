import React from "react";
import { TextField } from "@mui/material";
import { within, expect } from "storybook/test";
import { Story } from "./_FormControl.default";
import { FormControl } from "../FormControl";

export const WithSize: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <FormControl size="small">
        <TextField label="Small Size" variant="outlined" />
      </FormControl>
      <FormControl size="medium">
        <TextField label="Medium Size" variant="outlined" />
      </FormControl>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const smallField = canvas.getByLabelText("Small Size");
    const mediumField = canvas.getByLabelText("Medium Size");
    await expect(smallField).toBeInTheDocument();
    await expect(mediumField).toBeInTheDocument();
  },
};