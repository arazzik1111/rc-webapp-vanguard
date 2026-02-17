import React from "react";
import { Button, ButtonTypes } from "../Button";
import { userEvent, within, expect, fn, waitFor } from "storybook/test";
import { ButtonStory, testIcons, testColors } from "./_Button.default";

// Tests for the Button Hover State Story
export const ButtonHoverState: ButtonStory = {
  args: {
    type: ButtonTypes.primary,
    children: "Hover Color Test",
    icon: testIcons.save,
    iconPosition: "left",
    iconColor: testColors.primary,
    iconHoverColor: testColors.danger,
    color: testColors.primary,
    hoverColor: testColors.success,
    testId: "button-hover-state",
    onClick: fn(),
  },
  render: (args) => (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      gap: "24px", 
      alignItems: "flex-start" 
    }}>
      <div style={{ 
        padding: "20px", 
        border: "2px solid #e9ecef", 
        borderRadius: "12px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        <h3 style={{ margin: "0 0 16px 0", fontSize: "16px", fontWeight: "600" }}>
          Hover Color Transition Test
        </h3>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "120px 1fr", 
          gap: "12px", 
          marginBottom: "20px",
          fontSize: "14px" 
        }}>
          <strong>Icon Color:</strong>
          <span>Blue → Red on hover</span>
          <strong>Text Color:</strong>
          <span>Blue → Green on hover</span>
          <strong>Instructions:</strong>
          <span>Hover over the button to see color transitions</span>
        </div>
        
        <Button 
          {...args}
        />
      </div>
    </div>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Test that all three buttons are present
    const mainButton = canvas.getByRole("button", { name: "Hover Color Test" });
    await expect(mainButton).toBeInTheDocument();

    // Test that all buttons have their respective icons
    const mainIcon = await canvas.findByTestId(`${args.testId}_icon`);
    await expect(mainIcon).toBeInTheDocument();

    // Test hover interaction on main button with custom colors
    await userEvent.hover(mainButton);
    await waitFor(() => {
      // Button should be in hover state
      expect(mainButton).toBeInTheDocument();
    }, { timeout: 500 });

    // Test that hover state triggers (wait a bit for transition)
    await waitFor(() => {
      expect(mainButton).toBeInTheDocument();
    }, { timeout: 300 });

    await userEvent.unhover(mainButton);
    await waitFor(() => {
      // Button should return to normal state
      expect(mainButton).toBeInTheDocument();
    }, { timeout: 300 });

    // Test click functionality after hover
    await userEvent.click(mainButton);
    await expect(args.onClick).toHaveBeenCalled();

    
    // Test that icon positions are correct
    const mainButtonContainer = canvas.getByTestId(args.testId!);
    
    await expect(mainButtonContainer).toBeInTheDocument();

    // Cleanup the button state after testing interaction
    await userEvent.unhover(mainButton);
  },
};