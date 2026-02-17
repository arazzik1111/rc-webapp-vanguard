import React from "react";
import { fn, userEvent, within, expect } from "storybook/test";
import { ModalService } from "@vanguard/Modal/ModalService";
import { BigAssEditModal } from "../BigAssEditModal";
import { Story, testData, mockSaveCallback, mockCancelCallback, mockClose, closeAllModals } from "./_BigAssEditModal.default";
import { wait } from "@helpers/wait.ts";

export const WithTestId: Story = {
  args: {
    testId: "custom-edit-modal",
    title: "Modal with Test ID",
    description: "This modal has a custom testId for testing purposes",
    children: <div>Content with testId</div>,
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

    // Verify modal with testId is rendered
    await expect(canvas.getByTestId("custom-edit-modal")).toBeInTheDocument();

    // Verify title and content
    await expect(canvas.getByText("Modal with Test ID")).toBeInTheDocument();
    await expect(canvas.getByText("Content with testId")).toBeInTheDocument();

    // Close the modal
    const cancelButton = canvas.getByRole('button', { name: /cancel/i });
    await userEvent.click(cancelButton);
    await wait(0);
    await expect(canvas.queryByText("Modal with Test ID")).not.toBeInTheDocument();
  },
  render: (args) => {
    const openModal = () => {
      ModalService.open(
        <BigAssEditModal
          testId={args.testId}
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