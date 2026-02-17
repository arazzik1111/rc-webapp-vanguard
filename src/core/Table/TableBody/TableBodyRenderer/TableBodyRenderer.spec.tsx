import { render } from '@test-utils/test-utils';
import React from 'react';

import { TableBodyRenderer } from './TableBodyRenderer';

describe('TableBodyRenderer component tests', () => {
  test('should render', async () => {
    render(<TableBodyRenderer />);
  });
});
