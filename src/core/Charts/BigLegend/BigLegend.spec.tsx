import { render } from '@test-utils/test-utils';
import { IconNames } from '@vanguard/Icon/IconNames';
import React from 'react';

import { BigLegend } from './BigLegend';

describe('BigLegend component tests', () => {
  test('should render', async () => {
    render(
      <BigLegend
        bigLegendData={[
          {
            currentNumber: 110,
            previousNumber: 105,
            totalNumber: 54810,
            iconName: IconNames.notification,
            title: 'Website',
            description: 'Website clicks made from our Business Profile',
            totalNumberSeries: ['0'],
          },
          {
            currentNumber: 26000,
            previousNumber: 26000,
            totalNumber: 54810,
            iconName: IconNames.upload,
            title: 'Directions',
            description: 'Direction requests made from your Business Profile',
            totalNumberSeries: ['0'],
          },
          {
            currentNumber: 28700,
            previousNumber: 29000,
            totalNumber: 54810,
            iconName: IconNames.phone,
            title: 'Calls',
            description: 'Calls made from your Business Profile',
            totalNumberSeries: ['0'],
          },
        ]}
      />,
    );
  });
});
