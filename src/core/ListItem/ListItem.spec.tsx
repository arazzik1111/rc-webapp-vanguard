import { appScreen, render } from '@test-utils/test-utils';
import { Text, TextTypes } from '@vanguard/Text/Text';
import React from 'react';

import { ListItem } from './ListItem';

describe('ListItem component tests', () => {
  test('should render numerical icons', async () => {
    render(
      <ListItem
        type={'numerical'}
        children={<Text type={TextTypes.textCaption}>This is the life</Text>}
        index={0}
        key={0}
      />,
    );
    const listIconEl = await appScreen.findByTestId('iconList');
    expect(listIconEl.innerHTML).toBe('1');
  });

  test('should render alphabetical icons', async () => {
    render(
      <ListItem
        type={'alphabetical'}
        children={<Text type={TextTypes.textCaption}>This is the life</Text>}
        index={0}
        key={0}
      />,
    );
    const listIconEl = await appScreen.findByTestId('iconList');
    expect(listIconEl.innerHTML).toBe('a');
  });
});
