import { StoryObj } from '@storybook/react';
import { ModalService } from '@vanguard/Modal/ModalService';
import { fn } from 'storybook/test';

import { ImplementDetailsModal } from '../ImplementDetailsModal';

export type Story = StoryObj<typeof ImplementDetailsModal>;

export const mockClose = fn();

export const testData = {
  item: {
    id: 123,
    name: 'Sample Item',
    description: 'This is a sample item for testing',
    status: 'active',
    createdAt: '2023-01-01T00:00:00Z',
  },
};

// Helper function to close all open modals before starting a test
export const closeAllModals = async () => {
  // Close specific tracked modals
  ModalService.closeLoadingModal();
  ModalService.closeConfirmModal();
  ModalService.closeErrorModal();

  // Small delay to ensure cleanup
  await new Promise((resolve) => setTimeout(resolve, 100));
};
