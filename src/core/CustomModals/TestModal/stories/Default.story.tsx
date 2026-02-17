import React from "react";
import { fn, userEvent, within, expect } from "storybook/test";
import { ModalService } from "@vanguard/Modal/ModalService";
import { TestModal } from "../TestModal";
import { Story, mockClose, closeAllModals } from "./_TestModal.default";

export const Default: Story = {
  args: {
    close: mockClose,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Close any remaining modals from previous tests
    await closeAllModals();

    // Open modal
    const openButton = canvas.getByRole('button', { name: /open modal/i });
    await userEvent.click(openButton);

    // Verify modal renders with title
    await expect(canvas.getByText("Test Modal #1")).toBeInTheDocument();

    // Verify body content
    await expect(canvas.getByText("Body of modal #1")).toBeInTheDocument();

    // Close the modal
    const closeButton = canvas.getByRole('button', { name: /close modal/i });
    await userEvent.click(closeButton);
    await expect(canvas.queryByText("Test Modal #1")).not.toBeInTheDocument();
  },
  render: (args) => {
    const openModal = () => {
      ModalService.open(
        <TestModal
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