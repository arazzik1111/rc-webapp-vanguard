import { lineChartBaseSeriesType } from '@vanguard/Charts/LineChart/LineChart';
import { useCallback } from 'react';

export const useGetTotalSeriesValues = (
  series: lineChartBaseSeriesType[],
  previousSeries?: lineChartBaseSeriesType[],
) => {
  return useCallback(
    (seriesArray?: lineChartBaseSeriesType[] | null) => {
      const seriesValueArray: number[] = [];

      if (seriesArray) {
        seriesArray.forEach((element: lineChartBaseSeriesType, index: number) => {
          let total: number = 0;
          element.data.forEach((item: [number, number | null]) => {
            const value = item[1] ?? 0;
            total = total + value;
          });
          seriesValueArray.push(total);
        });
      }

      return seriesValueArray;
    },
    [series, previousSeries],
  );
};
