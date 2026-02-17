import React from "react";
import { AiGlow } from "../AiGlow";
import { within, expect } from "storybook/test";
import { Story } from "./_AiGlow.default";

export const WithColors: Story = {
  args: {
    baseColor: "#ff4500",
    startColor: "#ff8c00",
    endColor: "#ff4500",
    children: (
      <div
        style={{
          width: 180,
          height: 100,
          backgroundColor: "#fff5f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "16px",
          padding: "15px",
          textAlign: "center",
        }}
        data-testid="colors-content"
      >
        Custom Colors
      </div>
    ),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Test that the component renders
    const glowContainer = canvasElement.querySelector('[class*="grad"]');
    await expect(glowContainer).toBeTruthy();

    // Test that children are rendered
    const content = canvas.getByTestId("colors-content");
    await expect(content).toBeInTheDocument();
    await expect(content).toHaveTextContent("Custom Colors");

    // Test that color props are passed and applied
    await expect(args.baseColor).toBe("#ff4500");
    await expect(args.startColor).toBe("#ff8c00");
    await expect(args.endColor).toBe("#ff4500");

    // Test that the CSS custom properties are set with the correct values
    await expect(glowContainer).toHaveStyle({
      "--ai-base-color": "#ff4500",
      "--ai-start-color": "#ff8c00",
      "--ai-end-color": "#ff4500",
    });
  },
};