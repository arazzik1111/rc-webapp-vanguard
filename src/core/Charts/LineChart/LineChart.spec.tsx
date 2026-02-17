import { appScreen, render } from '@test-utils/test-utils';
import { screen } from '@testing-library/react';
import { IconNames } from '@vanguard/Icon/IconNames';
import React from 'react';

import { LineChartBase, lineChartBaseSeriesType } from './LineChart';

describe('LineChart component tests', () => {
  test('should render lineChart component', async () => {
    const series = [
      {
        name: 'Website clicks',
        data: [
          [1486684800000, 240],
          [1486771200000, 145],
          [1486857600000, 250],
          [1486944000000, 349],
          [1487030400000, 460],
          [1487116800000, 470],
        ] as [number, number | null][],
      },
      {
        name: 'Directions',
        data: [
          [1486684800000, 95],
          [1486771200000, 155],
          [1486857600000, 121],
          [1486944000000, 257],
          [1487030400000, 361],
          [1487116800000, 374],
        ] as [number, number | null][],
      },
      {
        name: 'Calls',
        data: [
          [1486684800000, 35],
          [1486771200000, 125],
          [1486857600000, 231],
          [1486944000000, 147],
          [1487030400000, 451],
          [1487116800000, 364],
        ] as [number, number | null][],
      },
    ];
    render(
      <LineChartBase
        series={series}
        testId={'lineChartTestId'}
        showPreviousNumber={false}
        showPreviousNumberText={false}
        showPercentage={false}
        showBadge={false}
      />,
    );
    const component = screen.getByTestId('lineChartTestId');
  });

  test('should render big Legend', async () => {
    const series = [
      {
        name: 'Website clicks',
        data: [
          [1486684800000, 240],
          [1486771200000, 145],
          [1486857600000, 250],
          [1486944000000, 349],
          [1487030400000, 460],
          [1487116800000, 470],
        ] as [number, number | null][],
      },
      {
        name: 'Directions',
        data: [
          [1486684800000, 95],
          [1486771200000, 155],
          [1486857600000, 121],
          [1486944000000, 257],
          [1487030400000, 361],
          [1487116800000, 374],
        ] as [number, number | null][],
      },
      {
        name: 'Calls',
        data: [
          [1486684800000, 35],
          [1486771200000, 125],
          [1486857600000, 231],
          [1486944000000, 147],
          [1487030400000, 451],
          [1487116800000, 364],
        ] as [number, number | null][],
      },
    ];
    render(
      <LineChartBase
        series={series}
        showBigLegend={true}
        testId={'LC'}
        bigLegendData={[
          {
            iconName: IconNames.notification,
            description: 'Website clicks made from our Business Profile',
          },

          {
            iconName: IconNames.upload,
            description: 'Direction requests made from your Business Profile',
          },

          {
            iconName: IconNames.phone,
            description: 'Calls made from your Business Profile',
          },
        ]}
        showPreviousNumber={false}
        showPreviousNumberText={false}
        showPercentage={false}
        showBadge={false}
      />,
    );
    const component = screen.getByTestId('LC_BigLegend');
  });

  test('should render big Legend', async () => {
    const series = [
      {
        name: 'Website clicks',
        data: [
          [1486684800000, 240],
          [1486771200000, 145],
          [1486857600000, 250],
          [1486944000000, 349],
          [1487030400000, 460],
          [1487116800000, 470],
        ] as [number, number | null][],
      },
      {
        name: 'Directions',
        data: [
          [1486684800000, 95],
          [1486771200000, 155],
          [1486857600000, 121],
          [1486944000000, 257],
          [1487030400000, 361],
          [1487116800000, 374],
        ] as [number, number | null][],
      },
      {
        name: 'Calls',
        data: [
          [1486684800000, 35],
          [1486771200000, 125],
          [1486857600000, 231],
          [1486944000000, 147],
          [1487030400000, 451],
          [1487116800000, 364],
        ] as [number, number | null][],
      },
    ];
    render(
      <LineChartBase
        series={series}
        chartTitle={'Test Title'}
        testId={'lc'}
        showPreviousNumber={false}
        showPreviousNumberText={false}
        showPercentage={false}
        showBadge={false}
      />,
    );

    const titleEl = await appScreen.findByTestId('lc_Title_topTitle');
    expect(titleEl.innerHTML).toBe('Test Title');
  });

  test('should render series values', async () => {
    const series = [
      {
        name: 'Website clicks',
        data: [
          [1486684800000, 240],
          [1486771200000, 145],
          [1486857600000, 250],
          [1486944000000, 349],
          [1487030400000, 460],
          [1487116800000, 470],
        ] as [number, number | null][],
      },
      {
        name: 'Directions',
        data: [
          [1486684800000, 95],
          [1486771200000, 155],
          [1486857600000, 121],
          [1486944000000, 257],
          [1487030400000, 361],
          [1487116800000, 374],
        ] as [number, number | null][],
      },
      {
        name: 'Calls',
        data: [
          [1486684800000, 35],
          [1486771200000, 125],
          [1486857600000, 231],
          [1486944000000, 147],
          [1487030400000, 451],
          [1487116800000, 364],
        ] as [number, number | null][],
      },
    ];
    const pseries = [
      {
        name: 'Website clicks',
        data: [
          [1486684800000, 200],
          [1486771200000, 200],
          [1486857600000, 200],
          [1486944000000, 200],
          [1487030400000, 200],
          [1487116800000, 200],
        ] as [number, number | null][],
      },
      {
        name: 'Directions',
        data: [
          [1486684800000, 300],
          [1486771200000, 300],
          [1486857600000, 300],
          [1486944000000, 300],
          [1487030400000, 300],
          [1487116800000, 300],
        ] as [number, number | null][],
      },
      {
        name: 'Calls',
        data: [
          [1486684800000, 300],
          [1486771200000, 300],
          [1486857600000, 300],
          [1486944000000, 300],
          [1487030400000, 300],
          [1487116800000, 300],
        ] as [number, number | null][],
      },
    ];

    const getTotalSeriesValuesConverted = (seriesArray: lineChartBaseSeriesType[] | null) => {
      let finalValue = 0;
      if (seriesArray) {
        seriesArray.forEach((element: lineChartBaseSeriesType, index: number) => {
          let total: number = 0;
          element.data.forEach((item: [number, number | null]) => {
            const value = item[1] ?? 0;
            total = total + value;
          });
          finalValue += total;
        });
      }
      let numbersConverted = '';
      if (finalValue.toString().length > 3) {
        numbersConverted = `${finalValue.toString().slice(0, 1)}.${finalValue.toString().slice(1, 3)}K`;
      }
      return numbersConverted;
    };

    render(
      <LineChartBase
        series={series}
        previousSeries={pseries}
        showPreviousNumber={false}
        showPreviousNumberText={false}
        showPercentage={false}
        showBadge={false}
      />,
    );

    const titleEl = await screen.findByTestId('BigLegendItem_FormattedNumber_TestId');
    expect(titleEl.innerHTML).toBe(getTotalSeriesValuesConverted(series));
  });
});
