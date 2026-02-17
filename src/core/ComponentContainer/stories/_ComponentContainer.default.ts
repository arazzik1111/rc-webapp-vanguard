import { StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { ComponentContainer } from '../ComponentContainer';

export type Story = StoryObj<typeof ComponentContainer>;

export const createMockOnClick = () => fn();

export const createMockRef = () => {
  let ref: HTMLDivElement | null = null;
  const refCallback = (node: HTMLDivElement | null) => {
    ref = node;
  };
  return { refCallback, getRef: () => ref };
};

export const testChildren = {
  default: 'Default content',
  withClass: 'Content with custom class',
  clickable: 'Clickable content',
  styled: 'Content with custom styles',
  article: 'Content with article role',
  withId: 'Content with ID',
  withRef: 'Content with ref',
} as const;

export const testIds = {
  default: 'component-container',
  custom: 'custom-container',
  clickable: 'clickable-container',
  styled: 'styled-container',
  article: 'article-container',
  withId: 'id-container',
  withRef: 'ref-container',
} as const;
