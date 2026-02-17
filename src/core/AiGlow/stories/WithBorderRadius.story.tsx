import React from "react";
import { AiGlow } from "../AiGlow";
import { within, expect } from "storybook/test";
import { Story } from "./_AiGlow.default";

export const WithBorderRadius: Story = {
  args: {
    borderRadius: 16,
    children: (
      <div
        style={{
          width: 150,
          height: 80,
          backgroundColor: "#e8f4fd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "16px",
        }}
        data-testid="border-radius-content"
      >
        Custom Border Radius
      </div>
    ),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Test that the component renders with borderRadius prop
    const glowContainer = canvasElement.querySelector('[class*="grad"]');
    await expect(glowContainer).toBeTruthy();

    // Test that children are rendered
    const content = canvas.getByTestId("border-radius-content");
    await expect(content).toBeInTheDocument();

    // Test that borderRadius prop is passed and applied
    await expect(args.borderRadius).toBe(16);

    // Test that the CSS custom property is set with the correct value
    await expect(glowContainer).toHaveStyle({ "--ai-border-radius": "16px" });
  },
};