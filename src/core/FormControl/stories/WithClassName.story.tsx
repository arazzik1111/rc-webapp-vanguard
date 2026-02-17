import React from "react";
import { TextField } from "@mui/material";
import { within, expect } from "storybook/test";
import { Story } from "./_FormControl.default";
import { FormControl } from "../FormControl";

export const WithClassName: Story = {
  render: () => (
    <FormControl className="custom-form-control-class">
      <TextField label="Form Control with Custom Class" variant="outlined" />
    </FormControl>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textField = canvas.getByLabelText("Form Control with Custom Class");
    await expect(textField).toBeInTheDocument();
    // The className should be applied to the FormControl wrapper
    const formControl = textField.closest('.custom-form-control-class');
    await expect(formControl).toBeInTheDocument();
  },
};