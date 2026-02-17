import React from "react";
import { TextField } from "@mui/material";
import { within, expect } from "storybook/test";
import { Story } from "./_FormControl.default";
import { FormControl } from "../FormControl";

export const Default: Story = {
  render: () => (
    <FormControl>
      <TextField label="Default Form Control" variant="outlined" />
    </FormControl>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textField = canvas.getByLabelText("Default Form Control");
    await expect(textField).toBeInTheDocument();
  },
};