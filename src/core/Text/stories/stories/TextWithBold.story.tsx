import React from "react";
import { Story, defaultProps, textTest } from "./_Text.default";

export const TextWithBold: Story = {
  args: {
    ...defaultProps,
    children: "Test text <strong>bold1</strong> <b>bold2</b>",
  },
  play: async ({ canvasElement }) => {
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
      textToFind: "bold1",
      color: "--text-color",
      fontFamily: "--theme-typeface",
      fontWeight: "700",
      textDecoration: false,
      toBeVisible: true,
      toHaveItalic: false,
      elementType: "strong",
      fontSize: "16px",
    });
    await textTest({
      canvasElement: canvasElement,
      textToFind: "bold2",
      color: "--text-color",
      fontFamily: "--theme-typeface",
      fontWeight: "700",
      textDecoration: false,
      toBeVisible: true,
      toHaveItalic: false,
      elementType: "b",
      fontSize: "16px",
    });
  },
};