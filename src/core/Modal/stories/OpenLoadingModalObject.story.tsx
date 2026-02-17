import React from 'react';
import { ModalService } from '../ModalService';
import { Button } from '@vanguard/Button/Button';
import { Story, testTitle, testMessage, testLoadingAnimation, testHeaderTitle } from './_ModalService.default';
import { userEvent, within } from 'storybook/test';

const OpenLoadingModalObjectComponent = () => {
  const openLoadingModalObject = () => {
    ModalService.openLoadingModal({
      title: testTitle,
      message: testMessage,
      loadingAnimation: testLoadingAnimation,
      headerTitle: testHeaderTitle,
    });
  };

  return (
    <Button onClick={openLoadingModalObject}>Open Loading Modal (Object)</Button>
  );
};

export const OpenLoadingModalObject: Story = {
  render: () => <OpenLoadingModalObjectComponent />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /open loading modal \(object\)/i });
    await userEvent.click(button);

    // Wait for modal to open
    await new Promise(resolve => setTimeout(resolve, 100));
  },
};