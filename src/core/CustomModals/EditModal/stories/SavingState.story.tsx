import React from "react";
import { fn, userEvent, within, screen, expect } from "storybook/test";
import { ModalService } from "@vanguard/Modal/ModalService";
import { EditModal } from "../EditModal";
import { Story, mockCancelCallback, mockClose, closeAllModals } from "./_EditModal.default";

export const SavingState: Story = {
  args: {
    title: "Saving Changes",
    children: <div>Please wait while saving...</div>,
    savable: true,
    savingInProgress: true,
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

    // Verify modal renders with saving state
    await expect(screen.getByText("Saving Changes")).toBeInTheDocument();
    await expect(screen.getByText("Please wait while saving...")).toBeInTheDocument();

    // Close the modal
    const cancelButton = canvas.getByRole('button', { name: /cancel/i });
    await userEvent.click(cancelButton);
    await expect(screen.queryByText("Saving Changes")).not.toBeInTheDocument();
  },
  render: (args) => {
    const openModal = () => {
      ModalService.open(
        <EditModal
          title={args.title}
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