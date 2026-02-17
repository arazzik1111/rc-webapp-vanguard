import React, { useState } from "react";
import { fn, userEvent, within, expect } from "storybook/test";
import { ModalService } from "@vanguard/Modal/ModalService";
import { BigAssEditModal } from "../BigAssEditModal";
import { Story, testData, mockCancelCallback, mockClose, closeAllModals } from "./_BigAssEditModal.default";
import { wait } from "@helpers/wait.ts";

export const SavingState: Story = {
  args: {
    title: "Saving Profile",
    description: "Please wait while we save your changes...",
    children: <div>Saving your profile data...</div>,
    savable: true,
    savingInProgress: false,
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

    // Verify modal renders with saving state title
    await expect(canvas.getByText('Saving Profile')).toBeInTheDocument();

    // Verify Save button is enabled
    const saveButton = canvas.getByRole('button', { name: /save/i });
    await expect(saveButton).toBeEnabled();

    // Click save to trigger save callback
    await userEvent.click(saveButton);

    // Close the modal
    const cancelButton = canvas.getByRole('button', { name: /cancel/i });
    await userEvent.click(cancelButton);
    await wait(0);

    await expect(canvas.queryByText('Saving Profile')).not.toBeInTheDocument();
  },
  render: (args) => {
    const [savingInProgress, setSavingInProgress] = useState(false);

    const handleSave = () => {
      setSavingInProgress(true);
      // Simulate async save operation
      setTimeout(() => {
        setSavingInProgress(false);
      }, 2000);
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