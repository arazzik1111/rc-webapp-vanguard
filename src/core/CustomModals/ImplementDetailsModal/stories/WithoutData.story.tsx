import React from "react";
import { fn, userEvent, within, expect } from "storybook/test";
import { ModalService } from "@vanguard/Modal/ModalService";
import { ImplementDetailsModal } from "../ImplementDetailsModal";
import { Story, mockClose, closeAllModals } from "./_ImplementDetailsModal.default";

export const WithoutData: Story = {
  args: {
    item: null,
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
    await expect(canvas.getByText("Info on what we need to implement")).toBeInTheDocument();

    // Verify "No data" message is displayed
    await expect(canvas.getByText("No data")).toBeInTheDocument();

    // Close the modal
    const closeButton = canvas.getByRole('button', { name: /close modal/i });
    await userEvent.click(closeButton);
    await expect(canvas.queryByText("Info on what we need to implement")).not.toBeInTheDocument();
  },
  render: (args) => {
    const openModal = () => {
      ModalService.open(
        <ImplementDetailsModal
          item={args.item}
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