import React from "react";
import { Story, defaultProps, DEFAULT_TEXT, textTest } from "./_Text.default";

export const TextStandard: Story = {
  args: {
    ...defaultProps,
    children: "Default text",
  },
  play: async ({ canvasElement }) => {
    await textTest({
      canvasElement: canvasElement,
      textToFind: DEFAULT_TEXT,
      color: "--text-color",
      fontFamily: "--theme-typeface",
      fontWeight: "400",
      textDecoration: false,
      toBeVisible: true,
      toHaveItalic: false,
      elementType: "span",
      fontSize: "16px",
    });
  },
};