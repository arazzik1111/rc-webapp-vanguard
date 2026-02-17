import React from "react";
import { within, expect, userEvent } from "storybook/test";
import { Story, selectors } from "./_ActionBar.default";

export const FooterMultipleButtons: Story = {
  args: {
    show: true,
    templateProps: {
      template: "footer",
      buttons: [
        { text: "Cancel", onClick: () => console.log("Cancel clicked") },
        { text: "Save", onClick: () => console.log("Save clicked") },
        { text: "Delete", onClick: () => console.log("Delete clicked") },
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId(selectors.container);
    await expect(container).toBeInTheDocument();
    // Check that all buttons are rendered
    const cancelButton = canvas.getByRole("button", { name: "Cancel" });
    const saveButton = canvas.getByRole("button", { name: "Save" });
    const deleteButton = canvas.getByRole("button", { name: "Delete" });
    await expect(cancelButton).toBeInTheDocument();
    await expect(saveButton).toBeInTheDocument();
    await expect(deleteButton).toBeInTheDocument();
    // Test one button click
    await userEvent.click(saveButton);
  },
};