import React from "react";
import { Story, defaultProps, getTextBySize, textTest } from "./_Text.default";

export const TextLong: Story = {
  args: {
    ...defaultProps,
    children: getTextBySize(150),
  },
  play: async ({ canvasElement, args }) => {
    await textTest({
      canvasElement: canvasElement,
      textToFind: args.children as string,
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