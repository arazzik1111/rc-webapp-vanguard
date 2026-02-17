import React, { useState } from "react";
import { ToggleButtonGroup } from "../ToggleButtonGroup";
import { ToggleButton } from "@vanguard/ToggleButton/ToggleButton";
import { within, expect, userEvent } from "storybook/test";
import { Icon } from "@vanguard/Icon/Icon";
import { IconNames } from "@vanguard/Icon/IconNames";
import { Story } from "./_ToggleButtonGroup.default";

export const InteractiveExclusive: Story = {
  render: () => {
    const [alignment, setAlignment] = useState<string>("left");

    const handleAlignment = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string,
    ) => {
      if (newAlignment !== null) {
        setAlignment(newAlignment);
      }
    };

    return (
      <div style={{ padding: "20px" }}>
        <h3>Text Alignment (Exclusive)</h3>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
        >
          <ToggleButton value="left">
            <Icon>{IconNames.arrowLeft}</Icon>
          </ToggleButton>
          <ToggleButton value="center">
            <Icon>{IconNames.text}</Icon>
          </ToggleButton>
          <ToggleButton value="right">
            <Icon>{IconNames.arrowRight}</Icon>
          </ToggleButton>
        </ToggleButtonGroup>
        <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#f5f5f5" }}>
          <strong>Selected alignment:</strong> {alignment}
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectedText = canvas.getByText("left");
    await expect(selectedText).toBeInTheDocument();

    // Click center alignment (second button)
    const buttons = canvas.getAllByRole("button");
    await userEvent.click(buttons[1]);
    const updatedText = canvas.getByText("center");
    await expect(updatedText).toBeInTheDocument();
  },
};