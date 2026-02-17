import React from "react";
import { fn, userEvent, within, screen, expect } from "storybook/test";
import { ModalService } from "@vanguard/Modal/ModalService";
import { EditModal } from "../EditModal";
import { Story, mockCancelCallback, mockClose, closeAllModals } from "./_EditModal.default";

export const WithError: Story = {
  args: {
    title: "Save Failed",
    children: <div>An error occurred while saving</div>,
    savable: true,
    savingInProgress: false,
    requestGotError: true,
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

    // Verify modal renders with error state
    await expect(screen.getByText("Save Failed")).toBeInTheDocument();
    await expect(screen.getByText("An error occurred while saving")).toBeInTheDocument();

    // Close the modal
    const cancelButton = canvas.getByRole('button', { name: /cancel/i });
    await userEvent.click(cancelButton);
    await expect(screen.queryByText("Save Failed")).not.toBeInTheDocument();
  },
  render: (args) => {
    const openModal = () => {
      ModalService.open(
        <EditModal
          title={args.title}
          children={args.children}
          savable={args.savable}
          savingInProgress={args.savingInProgress}
          requestGotError={args.requestGotError}
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