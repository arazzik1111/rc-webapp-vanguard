import React from "react";
import { Story, defaultProps, textTest } from "./_Text.default";

export const TextWithBoldAndEm: Story = {
  args: {
    ...defaultProps,
    children: "Test text <strong><em>bold and em 1</em></strong> <em><b>bold and em 2</b></em>",
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
      textToFind: "bold and em 1",
      color: "--em-color",
      fontFamily: "--theme-typeface",
      fontWeight: "700",
      textDecoration: false,
      toBeVisible: true,
      toHaveItalic: false,
      elementType: "em",
      fontSize: "16px",
    });
    await textTest({
      canvasElement: canvasElement,
      textToFind: "bold and em 2",
      color: "--em-color",
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