import React from "react";
import { InputLabel, TextField, FormHelperText } from "@mui/material";
import { within, expect } from "storybook/test";
import { Story } from "./_FormControl.default";
import { FormControl } from "../FormControl";

export const Disabled: Story = {
  render: () => (
    <FormControl disabled>
      <InputLabel htmlFor="disabled-input">Disabled Field</InputLabel>
      <TextField id="disabled-input" disabled />
      <FormHelperText>This field is disabled</FormHelperText>
    </FormControl>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const disabledField = canvas.getByLabelText("Disabled Field");
    await expect(disabledField).toBeInTheDocument();
  },
};