import { render } from '@test-utils/test-utils';
import { TableData } from '@vanguard/Table/Table.mock';
import React from 'react';

import { Table } from './Table';

describe('Table component tests', () => {
  const mockData = {
    data: {
      columns: TableData.columns,
      collections: TableData.collections,
      options: TableData.options,
    },
    pagination: {
      total: 3,
      limit: 1,
      offset: 0,
      page: 1,
      minPage: 1,
      maxPage: 3,
      step: 1,
    },
  };
  const props = Object.assign({}, mockData);

  test('should render', async () => {
    render(<Table {...props} />);
  });
});
