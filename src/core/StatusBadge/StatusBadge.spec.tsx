import { render } from '@test-utils/test-utils';
import React from 'react';

import { StatusBadge } from './StatusBadge';

describe('StatusBadge component tests', () => {
  test('should render', async () => {
    render(<StatusBadge text={'test'} status={'publishing'} />);
  });
});
