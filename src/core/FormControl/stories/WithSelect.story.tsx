import React from "react";
import { InputLabel, Select, MenuItem } from "@mui/material";
import { within, expect } from "storybook/test";
import { Story } from "./_FormControl.default";
import { FormControl } from "../FormControl";

export const WithSelect: Story = {
  render: () => (
    <FormControl fullWidth>
      <InputLabel id="demo-select-label">Age</InputLabel>
      <Select
        labelId="demo-select-label"
        id="demo-select"
        label="Age"
        defaultValue={20}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByLabelText("Age");
    await expect(select).toBeInTheDocument();
  },
};