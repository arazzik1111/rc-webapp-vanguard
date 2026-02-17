import React from "react";
import { within } from "storybook/test";
import { Story, defaultProps, textTest } from "./_Text.default";

export const TextWithMark: Story = {
  args: {
    ...defaultProps,
    children: "Test text <mark>highlighted</mark>",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    await textTest({
      canvasElement: canvasElement,
      textToFind: "Test text",
      color: "--text-color",
      fontFamily: "--theme-typeface",
      fontWeight: "400",
      textDecoration: false,
      toBeVisible: true,
      toHaveItalic: false,
      elementType: "span",
      fontSize: "16px",
    });
    await textTest({
      canvasElement: canvasElement,
      textToFind: "highlighted",
      color: "--text-color",
      fontFamily: "--theme-typeface",
      fontWeight: "400",
      textDecoration: false,
      toBeVisible: true,
      toHaveItalic: false,
      elementType: "mark",
      fontSize: "16px",
    });
  },
};