import { StoryObj } from '@storybook/react';
import { ContentType } from '@vanguard/Documents/Document.types';
import { MediaItemFile } from '@vanguard/Gallery/Gallery/Gallery';
import { ModalService } from '@vanguard/Modal/ModalService';
import { fn } from 'storybook/test';

import { PhotoCarouselModal } from '../PhotoCarouselModal';

export type Story = StoryObj<typeof PhotoCarouselModal>;

export const mockClose = fn();

export const mockGallery: MediaItemFile[] = [
  {
    uuid: '1',
    publicUrl: 'https://picsum.photos/id/1/800/600.jpg',
    publicThumbnailUrl: 'https://picsum.photos/id/1/200/150.jpg',
    type: 'image',
    fileType: ContentType.IMAGE_JPEG,
    objectType: 'image',
  },
  {
    uuid: '2',
    publicUrl: 'https://picsum.photos/id/2/800/600.jpg',
    publicThumbnailUrl: 'https://picsum.photos/id/2/200/150.jpg',
    type: 'image',
    fileType: ContentType.IMAGE_JPEG,
    objectType: 'image',
  },
  {
    uuid: '3',
    publicUrl: 'https://picsum.photos/id/3/800/600.jpg',
    publicThumbnailUrl: 'https://picsum.photos/id/3/200/150.jpg',
    type: 'image',
    fileType: ContentType.IMAGE_JPEG,
    objectType: 'image',
  },
];

export const singleImageGallery: MediaItemFile[] = [
  {
    uuid: 'single',
    publicUrl: 'https://picsum.photos/id/4/800/600.jpg',
    publicThumbnailUrl: 'https://picsum.photos/id/4/200/150.jpg',
    type: 'image',
    fileType: ContentType.IMAGE_JPEG,
    objectType: 'image',
  },
];

// Helper function to close all open modals before starting a test
export const closeAllModals = async () => {
  // Close specific tracked modals
  ModalService.closeLoadingModal();
  ModalService.closeConfirmModal();
  ModalService.closeErrorModal();

  // Close all remaining modals using the service method
  ModalService.closeAllModals();

  // Small delay to ensure cleanup
  await new Promise((resolve) => setTimeout(resolve, 200));
};
