import React from "react";
import { AiGlow } from "../AiGlow";
import { within, expect } from "storybook/test";
import { Story } from "./_AiGlow.default";

export const WithBorderWidth: Story = {
  args: {
    borderWidth: 4,
    children: (
      <div
        style={{
          width: 180,
          height: 120,
          backgroundColor: "#f0f9f4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "20px",
          padding: "15px",
          textAlign: "center",
          color: "#333",
        }}
        data-testid="border-width-content"
      >
        <p>
          With Border Width
        </p>
      </div>
    ),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Test that the component renders
    const glowContainer = canvasElement.querySelector('[class*="grad"]');
    await expect(glowContainer).toBeTruthy();

    // Test that children are rendered
    const content = canvas.getByTestId("border-width-content");
    await expect(content).toBeInTheDocument();
    await expect(content).toHaveTextContent("With Border Width");

    // Test that borderWidth prop is passed and applied
    await expect(args.borderWidth).toBe(4);

    // Test that the CSS custom property is set with the correct value
    await expect(glowContainer).toHaveStyle({
      "--ai-border-size-outside": "4px",
    });
  },
};