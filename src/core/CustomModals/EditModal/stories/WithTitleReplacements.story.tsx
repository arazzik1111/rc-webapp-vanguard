import React from "react";
import { fn, userEvent, within, expect } from "storybook/test";
import { ModalService } from "@vanguard/Modal/ModalService";
import { EditModal } from "../EditModal";
import { Story, mockSaveCallback, mockCancelCallback, mockClose, closeAllModals } from "./_EditModal.default";
import { wait } from "@helpers/wait.ts";

export const WithTitleReplacements: Story = {
  args: {
    title: "Edit {itemType} - {itemName}",
    titleReplacements: {
      itemType: "Profile",
      itemName: "John Doe",
    },
    children: <div>Profile edit form</div>,
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

    await wait(100);
    // Verify title with replacements
    await expect(canvas.getByText("Edit Profile - John Doe")).toBeInTheDocument();

    // Close the modal
    const cancelButton = canvas.getByRole('button', { name: /cancel/i });
    await userEvent.click(cancelButton);
    await wait(100);

    await expect(canvas.queryByText("Edit Profile - John Doe")).not.toBeInTheDocument();
  },
  render: (args) => {
    const openModal = () => {
      ModalService.open(
        <EditModal
          title={args.title}
          titleReplacements={args.titleReplacements}
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