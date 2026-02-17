import React from "react";
import { TextField } from "@mui/material";
import { within, expect } from "storybook/test";
import { Story } from "./_FormControl.default";
import { FormControl } from "../FormControl";

export const WithVariant: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <FormControl variant="outlined">
        <TextField label="Outlined Variant" />
      </FormControl>
      <FormControl variant="filled">
        <TextField label="Filled Variant" />
      </FormControl>
      <FormControl variant="standard">
        <TextField label="Standard Variant" />
      </FormControl>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const outlinedField = canvas.getByLabelText("Outlined Variant");
    const filledField = canvas.getByLabelText("Filled Variant");
    const standardField = canvas.getByLabelText("Standard Variant");
    await expect(outlinedField).toBeInTheDocument();
    await expect(filledField).toBeInTheDocument();
    await expect(standardField).toBeInTheDocument();
  },
};