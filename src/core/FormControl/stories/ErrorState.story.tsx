import React from "react";
import { InputLabel, TextField, FormHelperText } from "@mui/material";
import { within, expect } from "storybook/test";
import { Story } from "./_FormControl.default";
import { FormControl } from "../FormControl";

export const ErrorState: Story = {
  render: () => (
    <FormControl error>
      <InputLabel htmlFor="error-input">Name</InputLabel>
      <TextField id="error-input" error />
      <FormHelperText>This field is required</FormHelperText>
    </FormControl>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const errorText = canvas.getByText("This field is required");
    await expect(errorText).toBeInTheDocument();
  },
};