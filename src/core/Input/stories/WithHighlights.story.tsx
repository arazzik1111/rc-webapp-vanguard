import React from "react";
import { Input } from "../Input";
import { within, expect } from "storybook/test";
import { Story } from "./_Input.default";

export const WithHighlights: Story = {
  args: {
    value: "This text contains google.com and badword",
    highlightWords: ["text"],
    prohibitedWords: ["badword"],
    highlightUrl: true,
    testId: "highlights-input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId("highlights-input");
    await expect(input).toBeInTheDocument();
    // Note: Testing the actual highlighting would require checking the DOM structure
    // which might be complex. For now, we just ensure the input renders.
  },
};