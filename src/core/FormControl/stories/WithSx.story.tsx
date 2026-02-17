import React from "react";
import { TextField } from "@mui/material";
import { within, expect } from "storybook/test";
import { Story } from "./_FormControl.default";
import { FormControl } from "../FormControl";

export const WithSx: Story = {
  render: () => (
    <FormControl
      sx={{
        border: '2px solid blue',
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: 'lightblue'
      }}
    >
      <TextField label="Custom Styled Form Control" variant="outlined" />
    </FormControl>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textField = canvas.getByLabelText("Custom Styled Form Control");
    await expect(textField).toBeInTheDocument();
  },
};