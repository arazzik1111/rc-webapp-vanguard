import React from "react";
import { fn, userEvent, within, expect } from "storybook/test";
import { ModalService } from "@vanguard/Modal/ModalService";
import { BigAssEditModal } from "../BigAssEditModal";
import { Story, testData, mockSaveCallback, mockCancelCallback, mockClose, closeAllModals } from "./_BigAssEditModal.default";
import { wait } from "@helpers/wait.ts";

export const WithBodyClassName: Story = {
  args: {
    title: "Modal with Custom Body Class",
    description: "This modal has a custom bodyClassName for styling",
    children: <div>Content with custom body styling</div>,
    savable: true,
    savingInProgress: false,
    saveCallback: mockSaveCallback,
    cancelCallback: mockCancelCallback,
    close: mockClose,
    bodyClassName: "custom-modal-body",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Close any remaining modals from previous tests
    await closeAllModals();

    // Open modal
    const openButton = canvas.getByRole('button', { name: /open modal/i });
    await userEvent.click(openButton);

    // Verify modal renders with custom body class
    await expect(canvas.getByText("Modal with Custom Body Class")).toBeInTheDocument();

    // Verify the body has the custom class (check if the modal body contains the class)
    const modalBody = canvas.getByText("Content with custom body styling").closest('[class*="body"]');
    await expect(modalBody).toHaveClass("custom-modal-body");

    // Close the modal
    const cancelButton = canvas.getByRole('button', { name: /cancel/i });
    await userEvent.click(cancelButton);
    await wait(0);
    await expect(canvas.queryByText("Modal with Custom Body Class")).not.toBeInTheDocument();
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
          bodyClassName={args.bodyClassName}
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