import React from "react";
import { ExportXLS } from "../ExportXLS";
import { within, expect } from "storybook/test";
import { Story, sampleRows } from "./_ExportXLS.default";

export const Default: Story = {
  args: {
    rows: sampleRows,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveTextContent("Export XLS");
  },
};