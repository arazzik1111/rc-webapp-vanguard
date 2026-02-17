import React from 'react';
import { ModalService } from '../ModalService';
import { Button } from '@vanguard/Button/Button';
import { Story, testCloseFn, testTitle, testMessage, testPositiveCta, testNegativeCta, testHeaderType, testPositiveIconLeft, testReplacements, testHideHeaderCloseBtn, testCustomNegativeFn } from './_ModalService.default';
import { userEvent, within } from 'storybook/test';

const OpenConfirmModalObjectComponent = () => {
  const openConfirmModalObject = () => {
    ModalService.openConfirmModal({
      closeFn: testCloseFn,
      title: testTitle,
      message: testMessage,
      positiveCtaText: testPositiveCta,
      negativeCtaText: testNegativeCta,
      headerType: testHeaderType,
      positiveIconLeft: testPositiveIconLeft,
      replacements: testReplacements,
      hideHeaderCloseBtn: testHideHeaderCloseBtn,
      customNegativeFn: testCustomNegativeFn,
    });
  };

  return (
    <Button onClick={openConfirmModalObject}>Open Confirm Modal (Object)</Button>
  );
};

export const OpenConfirmModalObject: Story = {
  render: () => <OpenConfirmModalObjectComponent />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /open confirm modal \(object\)/i });
    await userEvent.click(button);

    // Wait for modal to open
    await new Promise(resolve => setTimeout(resolve, 100));
  },
};