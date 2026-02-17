import { render, screen } from '@test-utils/test-utils';
import React from 'react';

import { BarChart } from './BarChart';

describe('BarChart component tests', () => {
  test('should render BarChart component', async () => {
    const testId = 'BarChart_testId1';
    render(
      <BarChart
        series={[{ name: '', data: [800, 430, 548, 470, 540] }]}
        categories={['5 stars', '4 stars', '3 stars', '2 stars', '1 stars']}
        colors={['--s400', '--s400', '--a2900', '--e500', '--e500']}
        showLegend={true}
        customLegendItems={['Good', 'Neutral', 'Bad']}
        legendFillColors={['--s400', '--a2900', '--e500']}
        testId={testId}
      />,
    );
    screen.getByTestId(testId);
  });
});
