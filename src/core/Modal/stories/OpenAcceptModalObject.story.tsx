import React from 'react';
import { ModalService } from '../ModalService';
import { Button } from '@vanguard/Button/Button';
import { Story, testCloseFn, testTitle, testMessage, testPositiveCta, testHeaderType, testReplacements, testHideHeaderCloseBtn } from './_ModalService.default';
import { userEvent, within } from 'storybook/test';

const OpenAcceptModalObjectComponent = () => {
  const openAcceptModalObject = () => {
    ModalService.openAcceptModal({
      closeFn: testCloseFn,
      title: testTitle,
      message: testMessage,
      headerType: testHeaderType,
      positiveCtaText: testPositiveCta,
      replacements: testReplacements,
      hideHeaderCloseBtn: testHideHeaderCloseBtn,
    });
  };

  return (
    <Button onClick={openAcceptModalObject}>Open Accept Modal (Object)</Button>
  );
};

export const OpenAcceptModalObject: Story = {
  render: () => <OpenAcceptModalObjectComponent />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /open accept modal \(object\)/i });
    await userEvent.click(button);

    // Wait for modal to open
    await new Promise(resolve => setTimeout(resolve, 100));
  },
};