import React, { useState } from "react";
import { fn, userEvent, within, expect } from "storybook/test";
import { ModalService } from "@vanguard/Modal/ModalService";
import { EditModal } from "../EditModal";
import { Story, mockCancelCallback, mockClose, closeAllModals } from "./_EditModal.default";
import { wait } from "@helpers/wait.ts";

export const CloseOnSaveDisabled: Story = {
  args: {
    title: "Manual Close After Save",
    children: <div>Modal stays open after saving</div>,
    savable: true,
    savingInProgress: false,
    closeOnSave: false,
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

    // Click save
    const saveButton = canvas.getByRole('button', { name: /save/i });
    await userEvent.click(saveButton);

    // Modal should still be open
    await expect(canvas.getByText("Manual Close After Save")).toBeInTheDocument();

    // Close manually
    const cancelButton = canvas.getByRole('button', { name: /cancel/i });
    await userEvent.click(cancelButton);
    await wait(0)
    await expect(canvas.queryByText("Manual Close After Save")).not.toBeInTheDocument();
  },
  render: (args) => {
    const [savingInProgress, setSavingInProgress] = useState(false);

    const handleSave = () => {
      setSavingInProgress(true);
      // Simulate save operation
      setTimeout(() => {
        setSavingInProgress(false);
      }, 1000);
    };

    const openModal = () => {
      ModalService.open(
        <EditModal
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