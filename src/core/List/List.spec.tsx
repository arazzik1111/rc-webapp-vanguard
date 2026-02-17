import { appScreen, render } from '@test-utils/test-utils';
import { Text, TextTypes } from '@vanguard/Text/Text';
import React from 'react';

import { List } from './List';

describe('List component tests', () => {
  test('should render list elements', async () => {
    render(
      <List
        title={'This is title'}
        footerNote={'Footer note'}
        type={'numerical'}
        listElements={[
          {
            content: <Text type={TextTypes.textCaption}>This is the life</Text>,
            selected: true,
          },
        ]}
      />,
    );

    const listFooterNote = 'Footer note';
    const listTitle = 'This is title';

    const titleEl = await appScreen.findByTestId('title');
    const fotterNoteEl = await appScreen.findByTestId('footerNote');
    expect(fotterNoteEl.innerHTML).toBe(listFooterNote);
    expect(titleEl.innerHTML).toBe(listTitle);
  });
});
