import { render, screen } from '@test-utils/test-utils';
import { HSBChart } from '@vanguard/Charts/HSBChart/HSBChart';
import React from 'react';

describe('HSBChart component tests', () => {
  test('should render', async () => {
    const TestId = 'HSBChart_testID';
    render(
      <HSBChart
        series={[
          {
            name: 'Photos added by owner',
            data: [1, 20],
            color: 'var(--brand-color)',
          },
          {
            name: 'Photos added by customers',
            data: [10, 16],
            color: 'var(--a2900)',
          },
        ]}
        categories={['Greniere Brasserie', 'Immediate competition']}
        testId={TestId}
      />,
    );
    screen.getByTestId(TestId);
  });

  test('should render big legend', async () => {
    const TestId = 'HSBChart_testID';
    render(
      <HSBChart
        series={[
          {
            name: 'Photos added by owner',
            data: [1, 20],
            color: 'var(--brand-color)',
          },
          {
            name: 'Photos added by customers',
            data: [10, 16],
            color: 'var(--a2900)',
          },
        ]}
        categories={['Greniere Brasserie', 'Immediate competition']}
        showBigLegend={true}
        testId={TestId}
      />,
    );
    screen.getByTestId(`${TestId}_BigLegend`);
  });
});
