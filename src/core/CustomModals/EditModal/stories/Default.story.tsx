import React from "react";
import { fn, userEvent, within, screen, expect } from "storybook/test";
import { ModalService } from "@vanguard/Modal/ModalService";
import { EditModal } from "../EditModal";
import { Story, testData, mockSaveCallback, mockCancelCallback, mockClose, closeAllModals } from "./_EditModal.default";

export const Default: Story = {
  args: {
    title: testData.title,
    children: testData.children,
    savable: testData.savable,
    savingInProgress: testData.savingInProgress,
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

    // Verify modal renders with correct title
    await expect(screen.getByText(testData.title)).toBeInTheDocument();

    // Verify content is rendered
    await expect(screen.getByText("Edit form content")).toBeInTheDocument();

    // Verify Save button is enabled
    const saveButton = screen.getByTestId('modal-positive-cta_button');
    await expect(saveButton).toBeEnabled();

    // Verify Cancel button is present
    const cancelButton = screen.getByTestId('modal-negative-cta_button');
    await expect(cancelButton).toBeInTheDocument();

    // Close the modal
    await userEvent.click(cancelButton);
    await expect(screen.queryByText(testData.title)).not.toBeInTheDocument();
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