import React from "react";
import { ExportXLS } from "../ExportXLS";
import { within, expect } from "storybook/test";
import { Story, sampleRows, customButtonText } from "./_ExportXLS.default";

export const WithCustomButtonText: Story = {
  args: {
    rows: sampleRows,
    buttonText: customButtonText,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveTextContent(customButtonText);
  },
};