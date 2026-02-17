import React from "react";
import { AiGlow } from "../AiGlow";
import { within, expect } from "storybook/test";
import { Story } from "./_AiGlow.default";

export const WithClassName: Story = {
  args: {
    className: "custom-ai-glow-class",
    children: (
      <div
        style={{
          width: 200,
          height: 100,
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
        }}
        data-testid="classname-content"
      >
        With Custom Class
      </div>
    ),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Test that the component renders
    const glowContainer = canvasElement.querySelector('[class*="grad"]');
    await expect(glowContainer).toBeTruthy();

    // Test that the custom class is applied
    await expect(glowContainer?.className).toContain("custom-ai-glow-class");
    await expect(glowContainer?.className).toContain("grad");

    // Test that children are rendered
    const content = canvas.getByTestId("classname-content");
    await expect(content).toBeInTheDocument();
    await expect(content).toHaveTextContent("With Custom Class");

    // Test that className prop is passed
    await expect(args.className).toBe("custom-ai-glow-class");
  },
};