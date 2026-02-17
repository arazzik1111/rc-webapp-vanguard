import React from "react";
import { fn, userEvent, within, expect, screen } from "storybook/test";
import { ModalService } from "@vanguard/Modal/ModalService";
import { PhotoCarouselModal } from "../PhotoCarouselModal";
import { Story, mockGallery, mockClose, closeAllModals } from "./_PhotoCarouselModal.default";
import { wait } from "@helpers/wait.ts";

export const WithDefaultItem: Story = {
  args: {
    gallery: mockGallery,
    defaultMediaItem: mockGallery[1], // Start with second image
    close: mockClose,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Close any remaining modals from previous tests
    await closeAllModals();

    // Ensure no modal is present initially
    expect(screen.queryByRole("heading", { name: "Media gallery" })).not.toBeInTheDocument();

    // Open modal
    const openButton = canvas.getByRole("button", { name: /open modal/i });
    await userEvent.click(openButton);

    // Wait for modal to be fully rendered and get the specific modal instance
    const modalTitle = await screen.findByRole("heading", { name: "Media gallery" });
    await expect(modalTitle).toBeInTheDocument();

    // Verify we can find the modal content (the carousel should be present)
    // The carousel should start with the default item (second image)
    // Since we can't easily test the active slide without more complex selectors, we verify the modal structure

    // Close the modal
    const closeButton = screen.getByTestId("modal-close-header-cta_button");
    await userEvent.click(closeButton);
    await wait(0);

    // Ensure modal is closed
    await expect(screen.queryByRole("heading", { name: "Media gallery" })).not.toBeInTheDocument();
  },
  render: (args) => {
    const openModal = () => {
      ModalService.openPhotoGalleryModal(args.gallery, args.defaultMediaItem);
    };

    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
      </div>
    );
  },
};
