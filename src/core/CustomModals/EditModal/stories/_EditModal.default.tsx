import { StoryObj } from '@storybook/react';
import { ModalService } from '@vanguard/Modal/ModalService';
import { fn } from 'storybook/test';

import { EditModal } from '../EditModal';

export type Story = StoryObj<typeof EditModal>;

export const mockSaveCallback = fn();
export const mockCancelCallback = fn();
export const mockClose = fn();

export const testData = {
  title: 'Edit Item',
  children: <div>Edit form content</div>,
  savable: true,
  savingInProgress: false,
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
