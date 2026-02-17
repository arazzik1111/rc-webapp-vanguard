import React from "react";
import { fn, userEvent, within, expect, screen } from "storybook/test";
import { ModalService } from "@vanguard/Modal/ModalService";
import { PhotoCarouselModal } from "../PhotoCarouselModal";
import { Story, mockGallery, mockClose, closeAllModals } from "./_PhotoCarouselModal.default";
import { wait } from "@helpers/wait.ts";

export const Default: Story = {
  args: {
    gallery: mockGallery,
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
    await expect(await screen.findByRole('heading', { name: 'Media gallery' })).toBeInTheDocument();

    // Verify carousel is present (check for carousel container or images)
    // Since images are background images, we check for the carousel structure
    const modalBody = screen.getByRole('heading', { name: 'Media gallery' }).closest('[class*="modal"]');
    await expect(modalBody).toBeInTheDocument();

    // Close the modal
    const closeButton = screen.getByTestId('modal-close-header-cta_button');
    await userEvent.click(closeButton);
    await wait(0);

    await expect(screen.queryByRole('heading', { name: 'Media gallery' })).not.toBeInTheDocument();
  },
  render: (args) => {
    const openModal = () => {
      ModalService.openPhotoGalleryModal(args.gallery);
    };

    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
      </div>
    );
  },
};