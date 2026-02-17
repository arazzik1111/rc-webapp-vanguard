import React, { useState } from "react";
import { ToggleButtonGroup } from "../ToggleButtonGroup";
import { ToggleButton } from "@vanguard/ToggleButton/ToggleButton";
import { within, expect, userEvent } from "storybook/test";
import { Icon } from "@vanguard/Icon/Icon";
import { IconNames } from "@vanguard/Icon/IconNames";
import { Story } from "./_ToggleButtonGroup.default";

export const InteractiveMultiple: Story = {
  render: () => {
    const [formats, setFormats] = useState<string[]>([]);

    const handleFormat = (
      event: React.MouseEvent<HTMLElement>,
      newFormats: string[],
    ) => {
      setFormats(newFormats);
    };

    return (
      <div style={{ padding: "20px" }}>
        <h3>Text Formatting (Multiple)</h3>
        <ToggleButtonGroup
          value={formats}
          onChange={handleFormat}
        >
          <ToggleButton value="bold">
            <Icon>{IconNames.text}</Icon>
          </ToggleButton>
          <ToggleButton value="italic">
            <Icon>{IconNames.edit}</Icon>
          </ToggleButton>
          <ToggleButton value="underlined">
            <Icon>{IconNames.rewrite}</Icon>
          </ToggleButton>
        </ToggleButtonGroup>
        <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#f5f5f5" }}>
          <strong>Selected formats:</strong> {formats.length > 0 ? formats.join(", ") : "None"}
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectedText = canvas.getByText("None");
    await expect(selectedText).toBeInTheDocument();

    // Click bold button (first button)
    const buttons = canvas.getAllByRole("button");
    await userEvent.click(buttons[0]);
    const updatedText = canvas.getByText("bold");
    await expect(updatedText).toBeInTheDocument();
  },
};