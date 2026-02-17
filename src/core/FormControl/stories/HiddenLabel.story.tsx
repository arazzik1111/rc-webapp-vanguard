import React from "react";
import { InputLabel, TextField } from "@mui/material";
import { within, expect } from "storybook/test";
import { Story } from "./_FormControl.default";
import { FormControl } from "../FormControl";

export const HiddenLabel: Story = {
  render: () => (
    <FormControl hiddenLabel>
      <InputLabel htmlFor="hidden-label-input">Hidden Label</InputLabel>
      <TextField id="hidden-label-input" placeholder="Field with hidden label" />
    </FormControl>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("Field with hidden label");
    await expect(input).toBeInTheDocument();
    // The label should be present but visually hidden
    const label = canvas.getByText("Hidden Label");
    await expect(label).toBeInTheDocument();
  },
};