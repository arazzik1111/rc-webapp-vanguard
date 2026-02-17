import { render } from '@test-utils/test-utils';
import { ListItemsMock } from '@vanguard/ListItems/ListItems.mock';
import React from 'react';

import { ListItem, ListItemType } from './ListItem';

describe('ListItem component tests', () => {
  const mockData: ListItemType<any> = ListItemsMock()[0];

  test('should render', async () => {
    render(<ListItem item={mockData} />);
  });
});
