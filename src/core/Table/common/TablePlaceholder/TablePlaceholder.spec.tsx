import { render } from '@test-utils/test-utils';
import React from 'react';

import { TablePlaceholder } from './TablePlaceholder';

describe('TablePlaceholder component tests', () => {
  test('should render', async () => {
    render(<TablePlaceholder />);
  });
});
