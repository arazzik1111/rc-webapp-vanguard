import React from "react";
import { AiGlow } from "../AiGlow";
import { within, expect } from "storybook/test";
import { Story } from "./_AiGlow.default";

export const Default: Story = {
  args: {
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
        data-testid="ai-glow-content"
      >
        Basic Content
      </div>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test that the component renders
    const glowContainer = canvasElement.querySelector('[class*="grad"]');
    await expect(glowContainer).toBeTruthy();

    // Test that children are rendered
    const content = canvas.getByTestId("ai-glow-content");
    await expect(content).toBeInTheDocument();
    await expect(content).toHaveTextContent("Basic Content");

    // Test that the CSS custom property is set
    await expect(glowContainer).toHaveStyle({ "--ai-border-radius": "24px" });
  },
};