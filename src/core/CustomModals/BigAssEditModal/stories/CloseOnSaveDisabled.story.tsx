import React, { useState } from "react";
import { fn, userEvent, within, expect } from "storybook/test";
import { ModalService } from "@vanguard/Modal/ModalService";
import { BigAssEditModal } from "../BigAssEditModal";
import { Story, testData, mockCancelCallback, mockClose, closeAllModals } from "./_BigAssEditModal.default";
import { wait } from "@helpers/wait.ts";

export const CloseOnSaveDisabled: Story = {
  args: {
    title: "Edit Settings - Manual Close",
    description: "This modal will not close automatically after saving",
    children: <div>Settings form content</div>,
    savable: true,
    savingInProgress: false,
    closeOnSave: false, // Modal should NOT close automatically after save
    saveCallback: fn(),
    cancelCallback: mockCancelCallback,
    close: mockClose,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Close any remaining modals from previous tests
    await closeAllModals();

    // Open modal
    const openButton = canvas.getByRole('button', { name: /open modal/i });
    await userEvent.click(openButton);

    // Click save button
    const saveButton = canvas.getByRole('button', { name: /save/i });
    await userEvent.click(saveButton);

    // Modal should still be open (not closed automatically)
    await expect(canvas.getByText("Edit Settings - Manual Close")).toBeInTheDocument();

    // User should be able to manually close via Cancel button
    const cancelButton = canvas.getByRole('button', { name: /cancel/i });
    await userEvent.click(cancelButton);

    await wait(0);

    // Now modal should close
    await expect(canvas.queryByText("Edit Settings - Manual Close")).not.toBeInTheDocument();
  },
  render: (args) => {
    const [savingInProgress, setSavingInProgress] = useState(false);

    const handleSave = () => {
      setSavingInProgress(true);
      // Simulate save operation that completes but doesn't auto-close
      setTimeout(() => {
        setSavingInProgress(false);
        // Note: closeOnSave is false, so modal stays open
      }, 1000);
    };

    const openModal = () => {
      ModalService.open(
        <BigAssEditModal
          {...args}
          savingInProgress={savingInProgress}
          saveCallback={handleSave}
        />
      );
    };

    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
      </div>
    );
  },
};