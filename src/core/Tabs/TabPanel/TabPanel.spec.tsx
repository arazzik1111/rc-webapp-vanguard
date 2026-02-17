import { render } from '@test-utils/test-utils';
import React from 'react';

import { TabPanel } from './TabPanel';

describe('TabPanel component tests', () => {
  test('should render', async () => {
    render(<TabPanel currentTab={1} value={1} />);
  });
});
