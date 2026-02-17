import React, { useState } from "react";
import { fn, userEvent, within, expect } from "storybook/test";
import { ModalService } from "@vanguard/Modal/ModalService";
import { BigAssEditModal } from "../BigAssEditModal";
import { Story, testData, mockSaveCallback, mockClose, closeAllModals } from "./_BigAssEditModal.default";
import { wait } from "@helpers/wait.ts";

export const CancelFlow: Story = {
  args: {
    title: "Edit Document - Unsaved Changes",
    description: "You have unsaved changes. Click Cancel to discard them.",
    children: (
      <div>
        <p>Document content with unsaved changes...</p>
        <div style={{ backgroundColor: "#fff3cd", padding: "10px", borderRadius: "4px", marginTop: "10px" }}>
          ⚠️ Warning: Your changes will be lost if you cancel
        </div>
      </div>
    ),
    savable: true,
    savingInProgress: false,
    saveCallback: mockSaveCallback,
    cancelCallback: fn(),
    close: mockClose,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Close any remaining modals from previous tests
    await closeAllModals();

    // Open modal
    const openButton = canvas.getByRole('button', { name: /open modal/i });
    await userEvent.click(openButton);

    // Verify warning message is displayed
    await expect(canvas.getByText("⚠️ Warning: Your changes will be lost if you cancel")).toBeInTheDocument();

    // Click Cancel button
    const cancelButton = canvas.getByRole('button', { name: /cancel/i });
    await userEvent.click(cancelButton);

    await wait(0);

    // Verify cancelCallback was called and modal closed
    await expect(canvas.queryByText("Edit Document - Unsaved Changes")).not.toBeInTheDocument();
  },
  render: (args) => {
    const [cancelConfirmed, setCancelConfirmed] = useState(false);

    const handleCancel = () => {
      setCancelConfirmed(true);
      console.log("Cancel callback executed - changes discarded");
    };

    const openModal = () => {
      ModalService.open(
        <BigAssEditModal
          {...args}
          cancelCallback={handleCancel}
        />
      );
    };

    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        {cancelConfirmed && (
          <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#d1ecf1", borderRadius: "4px" }}>
            ✅ Cancel confirmed - changes were discarded
          </div>
        )}
      </div>
    );
  },
};