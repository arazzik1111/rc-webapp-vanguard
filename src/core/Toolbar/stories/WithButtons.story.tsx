import React from "react";
import { Toolbar } from "../Toolbar";
import { Text, TextTypes } from "@vanguard/Text/Text";
import { Button } from "@vanguard/Button/Button";
import { within, expect } from "storybook/test";
import { Story } from "./_Toolbar.default";

export const WithButtons: Story = {
  render: () => (
    <Toolbar>
      <Text type={TextTypes.heading3} style={{ flexGrow: 1 }}>
        Document Editor
      </Text>
      <Button>Save</Button>
      <Button>Export</Button>
      <Button>Share</Button>
    </Toolbar>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByText("Document Editor");
    const saveButton = canvas.getByText("Save");
    const exportButton = canvas.getByText("Export");
    const shareButton = canvas.getByText("Share");

    await expect(title).toBeInTheDocument();
    await expect(saveButton).toBeInTheDocument();
    await expect(exportButton).toBeInTheDocument();
    await expect(shareButton).toBeInTheDocument();
  },
};