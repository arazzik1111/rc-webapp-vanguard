import { StoryObj } from '@storybook/react';
import { ContentType } from '@vanguard/Documents/Document.types';
import { MediaItemFile } from '@vanguard/Gallery/Gallery/Gallery';
import { fn } from 'storybook/test';

import { MediaItemSelectInput } from '../MediaItemSelectInput';

export type Story = StoryObj<typeof MediaItemSelectInput>;

export const createMockOnFilesSelected = () => fn();

export const createMockOpenCallback = () => fn();

export const mockMediaItemFile: MediaItemFile = {
  file: new File([''], 'test.png', { type: 'image/png' }),
  filePriority: 'primary',
  fileType: ContentType.IMAGE_PNG,
  objectType: 'MediaItemFile',
};

export const mockMediaItemFiles: MediaItemFile[] = [mockMediaItemFile];
