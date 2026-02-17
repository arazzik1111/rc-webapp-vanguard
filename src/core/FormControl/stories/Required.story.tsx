import React from "react";
import { InputLabel, TextField } from "@mui/material";
import { within, expect } from "storybook/test";
import { Story } from "./_FormControl.default";
import { FormControl } from "../FormControl";

export const Required: Story = {
  render: () => (
    <FormControl required>
      <InputLabel htmlFor="required-input">Required Field</InputLabel>
      <TextField id="required-input" />
    </FormControl>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Required Field");
    await expect(label).toBeInTheDocument();
    // Check that the label has the required asterisk
    const asterisk = canvas.getByText("*");
    await expect(asterisk).toBeInTheDocument();
  },
};