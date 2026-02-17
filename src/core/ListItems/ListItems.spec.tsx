import { render } from '@test-utils/test-utils';
import { ListItemsMock } from '@vanguard/ListItems/ListItems.mock';
import React from 'react';

import { ListItems } from './ListItems';

describe('ListItems component tests', () => {
  const mock = ListItemsMock();

  test('should render', async () => {
    render(<ListItems items={mock} />);
  });
});
