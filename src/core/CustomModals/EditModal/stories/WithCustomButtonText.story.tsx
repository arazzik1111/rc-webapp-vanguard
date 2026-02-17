import React from "react";
import { fn, userEvent, within, screen, expect } from "storybook/test";
import { ModalService } from "@vanguard/Modal/ModalService";
import { EditModal } from "../EditModal";
import { Story, mockSaveCallback, mockCancelCallback, mockClose, closeAllModals } from "./_EditModal.default";
import { wait } from "@helpers/wait.ts";

export const WithCustomButtonText: Story = {
  args: {
    title: "Confirm Action",
    children: <div>Are you sure you want to proceed?</div>,
    positiveBtnText: "Confirm",
    savable: true,
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

    // Verify custom button text - use testId to avoid ambiguity
    await expect(screen.getByTestId('modal-positive-cta_button')).toBeInTheDocument();
    await expect(screen.getByTestId('modal-positive-cta_button')).toHaveTextContent('Confirm');

    // Close the modal - use testId for consistency
    const cancelButton = screen.getByTestId('modal-negative-cta_button');
    await userEvent.click(cancelButton);
    await wait(100);

    await expect(screen.queryByText("Confirm Action")).not.toBeInTheDocument();
  },
  render: (args) => {
    const openModal = () => {
      ModalService.open(
        <EditModal
          title={args.title}
          children={args.children}
          positiveBtnText={args.positiveBtnText}
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