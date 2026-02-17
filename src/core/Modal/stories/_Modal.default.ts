import { StoryObj } from '@storybook/react';
import { Modal } from '@vanguard/Modal/Modal';
import { ModalService } from '@vanguard/Modal/ModalService';

export type Story = StoryObj<typeof Modal>;

// Helper function to close all open modals before starting a test
export const closeAllModals = async () => {
  // Close specific tracked modals
  ModalService.closeLoadingModal();
  ModalService.closeConfirmModal();
  ModalService.closeErrorModal();

  // Small delay to ensure cleanup
  await new Promise((resolve) => setTimeout(resolve, 100));
};
