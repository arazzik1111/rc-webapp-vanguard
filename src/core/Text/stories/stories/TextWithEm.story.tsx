import React from "react";
import { within } from "storybook/test";
import { Story, defaultProps, textTest } from "./_Text.default";

export const TextWithEm: Story = {
  args: {
    ...defaultProps,
    children: "Test text <em>emphasis</em>",
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
      textToFind: "emphasis",
      color: "--em-color",
      fontFamily: "--theme-typeface",
      fontWeight: "400",
      textDecoration: false,
      toBeVisible: true,
      toHaveItalic: false,
      elementType: "em",
      fontSize: "16px",
    });
  },
};