import { render } from '@test-utils/test-utils';
import React from 'react';

import { DatePicker } from './DatePicker';

describe('DatePicker component tests', () => {
  test('should render', async () => {
    render(<DatePicker />);
  });
});
