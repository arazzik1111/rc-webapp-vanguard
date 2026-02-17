import { render } from '@test-utils/test-utils';
import React from 'react';

import { SmallLoader } from './SmallLoader';

describe('SmallLoader component tests', () => {
  test('should render', async () => {
    render(<SmallLoader />);
  });
});
