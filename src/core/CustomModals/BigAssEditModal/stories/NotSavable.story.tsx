import React from "react";
import { fn, userEvent, within, expect } from "storybook/test";
import { ModalService } from "@vanguard/Modal/ModalService";
import { BigAssEditModal } from "../BigAssEditModal";
import { Story, testData, mockSaveCallback, mockCancelCallback, mockClose, closeAllModals } from "./_BigAssEditModal.default";
import { wait } from "@helpers/wait.ts";

export const NotSavable: Story = {
  args: {
    title: "Edit Profile - Validation Required",
    description: "Please fill in all required fields before saving",
    children: (
      <div>
        <p>Name: <input type="text" placeholder="Required field" /></p>
        <p>Email: <input type="email" placeholder="Required field" /></p>
        <p style={{ color: 'red' }}>Please complete all fields to enable save</p>
      </div>
    ),
    savable: false, // Save button should be disabled
    savingInProgress: false,
    saveCallback: mockSaveCallback,
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

    // Verify modal renders with validation message
    await expect(canvas.getByText("Please complete all fields to enable save")).toBeInTheDocument();

    // Verify Save button is disabled when savable is false
    const saveButton = canvas.getByRole('button', { name: /save/i });
    await expect(saveButton).toBeDisabled();

    // Verify Cancel button is still enabled
    const cancelButton = canvas.getByRole('button', { name: /cancel/i });
    await expect(cancelButton).toBeEnabled();

    // Verify save button cannot be clicked
    await userEvent.click(saveButton);
    // Modal should still be open since save was disabled
    await expect(canvas.getByText("Edit Profile - Validation Required")).toBeInTheDocument();

    // Close the modal
    await userEvent.click(cancelButton);
    await wait(0);

    await expect(canvas.queryByText("Edit Profile - Validation Required")).not.toBeInTheDocument();
  },
  render: (args) => {
    const openModal = () => {
      ModalService.open(
        <BigAssEditModal
          title={args.title}
          description={args.description}
          children={args.children}
          savable={args.savable}
          savingInProgress={args.savingInProgress}
          saveCallback={args.saveCallback}
          cancelCallback={args.cancelCallback}
          close={args.close}
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