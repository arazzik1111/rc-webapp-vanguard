import { render } from '@test-utils/test-utils';
import React from 'react';

import { DonutChart } from './DonutChart';

describe('AreaChart component tests', () => {
  test('AreaChart should render', async () => {
    render(<DonutChart series={[1, 2, 5, 6]} />);
  });
});
