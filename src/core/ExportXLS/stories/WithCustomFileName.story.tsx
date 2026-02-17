import React from "react";
import { ExportXLS } from "../ExportXLS";
import { within, expect } from "storybook/test";
import { Story, sampleRows, customFileName } from "./_ExportXLS.default";

export const WithCustomFileName: Story = {
  args: {
    rows: sampleRows,
    fileName: customFileName,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toBeInTheDocument();
  },
};