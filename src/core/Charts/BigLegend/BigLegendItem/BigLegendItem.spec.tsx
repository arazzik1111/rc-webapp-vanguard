import { render } from '@test-utils/test-utils';
import React from 'react';

import { BigLegendItem } from './BigLegendItem';

describe('BigLegendItem component tests', () => {
  test('should render', async () => {
    render(<BigLegendItem currentNumber={100} totalNumber={100} totalNumberSeries={[]} />);
  });
});
