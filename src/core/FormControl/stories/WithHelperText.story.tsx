import React from "react";
import { InputLabel, TextField, FormHelperText } from "@mui/material";
import { within, expect } from "storybook/test";
import { Story } from "./_FormControl.default";
import { FormControl } from "../FormControl";

export const WithHelperText: Story = {
  render: () => (
    <FormControl>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <TextField id="my-input" type="email" />
      <FormHelperText>We'll never share your email.</FormHelperText>
    </FormControl>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const helperText = canvas.getByText("We'll never share your email.");
    await expect(helperText).toBeInTheDocument();
  },
};