import React from "react";
import { TextField } from "@mui/material";
import { within, expect } from "storybook/test";
import { Story } from "./_FormControl.default";
import { FormControl } from "../FormControl";

export const WithColor: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <FormControl color="primary">
        <TextField label="Primary Color" variant="outlined" />
      </FormControl>
      <FormControl color="secondary">
        <TextField label="Secondary Color" variant="outlined" />
      </FormControl>
      <FormControl color="error">
        <TextField label="Error Color" variant="outlined" />
      </FormControl>
      <FormControl color="info">
        <TextField label="Info Color" variant="outlined" />
      </FormControl>
      <FormControl color="success">
        <TextField label="Success Color" variant="outlined" />
      </FormControl>
      <FormControl color="warning">
        <TextField label="Warning Color" variant="outlined" />
      </FormControl>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const primaryField = canvas.getByLabelText("Primary Color");
    const secondaryField = canvas.getByLabelText("Secondary Color");
    const errorField = canvas.getByLabelText("Error Color");
    const infoField = canvas.getByLabelText("Info Color");
    const successField = canvas.getByLabelText("Success Color");
    const warningField = canvas.getByLabelText("Warning Color");
    await expect(primaryField).toBeInTheDocument();
    await expect(secondaryField).toBeInTheDocument();
    await expect(errorField).toBeInTheDocument();
    await expect(infoField).toBeInTheDocument();
    await expect(successField).toBeInTheDocument();
    await expect(warningField).toBeInTheDocument();
  },
};