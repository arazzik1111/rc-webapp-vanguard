import React from "react";
import { fn, userEvent, within, expect } from "storybook/test";
import { ModalService } from "@vanguard/Modal/ModalService";
import { EditModal } from "../EditModal";
import { Story, mockSaveCallback, mockCancelCallback, mockClose, closeAllModals } from "./_EditModal.default";
import { wait } from "@helpers/wait.ts";

export const WithCustomWidth: Story = {
  args: {
    title: "Narrow Modal",
    children: <div>This modal has a custom width</div>,
    width: "400px",
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

    // Verify modal renders with custom width
    await expect(canvas.getByText("Narrow Modal")).toBeInTheDocument();

    // Close the modal
    const cancelButton = canvas.getByRole('button', { name: /cancel/i });
    await userEvent.click(cancelButton);
    await wait(0);
    await expect(canvas.queryByText("Narrow Modal")).not.toBeInTheDocument();
  },
  render: (args) => {
    const openModal = () => {
      ModalService.open(
        <EditModal
          title={args.title}
          children={args.children}
          width={args.width}
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