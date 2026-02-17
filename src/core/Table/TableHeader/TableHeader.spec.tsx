import { render } from '@test-utils/test-utils';
import React from 'react';

import { TableHeader } from './TableHeader';

describe('TableHeader component tests', () => {
  test('should render', async () => {
    render(<TableHeader />);
  });
});
