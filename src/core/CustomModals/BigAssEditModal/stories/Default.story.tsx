import React from "react";
import { fn, userEvent, within, expect } from "storybook/test";
import { ModalService } from "@vanguard/Modal/ModalService";
import { BigAssEditModal } from "../BigAssEditModal";
import { Story, testData, mockSaveCallback, mockCancelCallback, mockClose, closeAllModals } from "./_BigAssEditModal.default";
import { wait } from "@helpers/wait.ts";

export const Default: Story = {
  args: {
    title: testData.title,
    description: testData.description,
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

    // Open modal via service
    const openButton = canvas.getByRole('button', { name: /open modal/i });
    await userEvent.click(openButton);

    // Verify modal renders with correct title and description
    await expect(canvas.getByText(testData.title)).toBeInTheDocument();
    await expect(canvas.getByText(testData.description)).toBeInTheDocument();

    // Verify content is rendered
    await expect(canvas.getByText("Profile edit form content")).toBeInTheDocument();

    // Verify Save button is enabled
    const saveButton = canvas.getByRole('button', { name: /save/i });
    await expect(saveButton).toBeEnabled();

    // Verify Cancel button is present
    const cancelButton = canvas.getByRole('button', { name: /cancel/i });
    await expect(cancelButton).toBeInTheDocument();

    // Close the modal
    await userEvent.click(cancelButton);
    await wait(0);
    await expect(canvas.queryByText(testData.title)).not.toBeInTheDocument();
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