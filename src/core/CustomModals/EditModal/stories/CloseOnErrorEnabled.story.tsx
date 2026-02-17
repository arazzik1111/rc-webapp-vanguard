import React, { useState } from "react";
import { fn, userEvent, within, expect } from "storybook/test";
import { ModalService } from "@vanguard/Modal/ModalService";
import { EditModal } from "../EditModal";
import { Story, mockCancelCallback, mockClose, closeAllModals } from "./_EditModal.default";
import { wait } from "@helpers/wait.ts";

export const CloseOnErrorEnabled: Story = {
  args: {
    title: "Auto Close on Error",
    children: <div>Modal will close automatically on error</div>,
    savable: true,
    savingInProgress: false,
    closeOnError: true,
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

    // Click save to trigger error
    const saveButton = canvas.getByRole('button', { name: /save/i });
    await userEvent.click(saveButton);

    await wait(0)
    // Modal should close automatically on error
    await expect(canvas.queryByText("Auto Close on Error")).not.toBeInTheDocument();
  },
  render: (args) => {
    const [savingInProgress, setSavingInProgress] = useState(false);
    const [requestGotError, setRequestGotError] = useState(false);

    const handleSave = () => {
      setSavingInProgress(true);
      // Simulate save operation that fails
      setTimeout(() => {
        setSavingInProgress(false);
        setRequestGotError(true);
      }, 1000);
    };

    const openModal = () => {
      ModalService.open(
        <EditModal
          {...args}
          savingInProgress={savingInProgress}
          requestGotError={requestGotError}
          closeOnSave={true}
          saveCallback={handleSave}
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