import { render } from '@test-utils/test-utils';
import React from 'react';

import { TableCell } from './TableCell';

describe('TableCell component tests', () => {
  test('should render', async () => {
    render(<TableCell />);
  });
});
