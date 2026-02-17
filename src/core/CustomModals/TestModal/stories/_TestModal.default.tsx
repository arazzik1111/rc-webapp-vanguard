import { StoryObj } from '@storybook/react';
import { ModalService } from '@vanguard/Modal/ModalService';
import { fn } from 'storybook/test';

import { TestModal } from '../TestModal';

export type Story = StoryObj<typeof TestModal>;

export const mockClose = fn();

// Helper function to close all open modals before starting a test
export const closeAllModals = async () => {
  // Close specific tracked modals
  ModalService.closeLoadingModal();
  ModalService.closeConfirmModal();
  ModalService.closeErrorModal();

  // Small delay to ensure cleanup
  await new Promise((resolve) => setTimeout(resolve, 100));
};
