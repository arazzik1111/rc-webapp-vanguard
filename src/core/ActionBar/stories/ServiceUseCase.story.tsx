import React from 'react';
import { within, expect } from 'storybook/test';
import { Story, selectors } from './_ActionBar.default';
import { ActionBarRoot } from '../ActionBarRoot/ActionBarRoot';
import { actionBarService } from '../ActionBar.service';
import { wait } from '@helpers/wait.ts';

const addMessage = () => {
  actionBarService.addMessage({
    type: 'warning',
    title: 'Your profile has un-published changes',
    description:
      "You made changes to your profile, but they weren't published. If you don't update the profile, the information that people see may be out of date and can negatively impact your online presence.",
    button: {
      text: 'Go to Publishing',
      onClick: () => {},
    },
  });
};

const setFooter = () => {
  actionBarService.setFooter({
    buttons: [
      { text: 'Cancel', onClick: () => console.log('Cancel') },
      { text: 'Save', onClick: () => console.log('Save') },
      { text: 'Delete', onClick: () => console.log('Delete') },
    ],
  });
};

const testMessage = async (canvas: any) => {
  const button = canvas.getByRole('button', { name: 'Go to Publishing' });
  await expect(button).toBeInTheDocument();

};

const testFooter = async (canvas: any) => {
  const cancelButton = canvas.getByRole('button', { name: 'Cancel' });
  await expect(cancelButton).toBeInTheDocument();
};
export const ServiceUseCase: Story = {
  render: () => <ActionBarRoot />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    addMessage();
    await wait(100);
    await testMessage(canvas);
    await wait(500);
    actionBarService.hideFooter();
    await wait(500);
    setFooter();
    await wait(100);
    await testFooter(canvas);
    await wait(500);
    actionBarService.hideFooter();
    await wait(500);
    addMessage();
    await wait(100);
    await testMessage(canvas);
  },
};
