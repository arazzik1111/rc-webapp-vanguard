import './LineChart.scss';

import { InfoIcon } from '@common/InfoIcon/InfoIcon';
import { CHART_COLORS } from '@helpers/charts/colors';
import { classNames } from '@helpers/classNames';
import { translationService } from '@services/translation.service';
import { BigLegend, BigLegendProps } from '@vanguard/Charts/BigLegend/BigLegend';
import { BigLegendItem, BigLegendItemProps } from '@vanguard/Charts/BigLegend/BigLegendItem/BigLegendItem';
import { ChartsPlaceholder } from '@vanguard/Charts/ChartsPlaceholder/ChartsPlaceholder';
import { useGetTotalSeriesValues } from '@vanguard/Charts/LineChart/use-get-total-series-values';
import { useLineChartOptions } from '@vanguard/Charts/LineChart/use-line-chart-options';
import { IconSize } from '@vanguard/Icon/Icon';
import { Render } from '@vanguard/Render/Render';
import { Text, TextReplacements, TextTypes } from '@vanguard/Text/Text';
import { ApexOptions } from 'apexcharts';
import React, { useCallback, useEffect } from 'react';
import Chart from 'react-apexcharts';

export type lineChartBaseSeriesType<T = string> = {
  name: T;
  replacements?: TextReplacements;
  data: [number, number | null][];
};

export type BigLegendDataTypeBase = Partial<BigLegendItemProps>[];

type LineChartProps = {
  isLoading?: boolean;
  chartTitle?: string | React.ReactNode;
  height?: string;
  width?: string;
  showBigLegend?: boolean;
  bigLegendData?: BigLegendDataTypeBase;
  testId?: string;
  showPreviousNumber?: boolean;
  showPreviousNumberText?: boolean;
  showPercentage?: boolean;
  showBadge?: boolean;
  bigLegendProps?: Partial<Omit<BigLegendProps, 'bigLegendData'>>;
  showOutOfSeries?: boolean;
  totalBudgetFormatted?: string;
  totalBudgetUsedFormatted?: string;
  provideCustomTotals?: boolean; // default: false | when false, totals are automatically calculated from series
  seriesTotal?: number;
  previousSeriesTotal?: number;
  showInfoIcon?: boolean;
  showChartHeader?: boolean;
  infoIconData?: {
    title: string;
    message: string;
    messageReplacements?: TextReplacements;
  };
  showTotalNumberSeries?: boolean;
  labels?: string[];
  series: lineChartBaseSeriesType[];
  previousSeries?: lineChartBaseSeriesType[];
  colors?: string[];
  showLegend?: boolean;
  customLegendItems?: string[][];
  replacements?: TextReplacements;
  yaxisTickAmount?: number;
  yaxisMin?: number;
  yaxisMax?: number;
  options?: ApexOptions;
  tooltipDateFormatter?: (date: Date) => string;
  labelDateFormatter?: (date: Date) => string;
};

const LineChart = (props: LineChartProps) => {
  const {
    series,
    previousSeries,
    height,
    width,
    colors = CHART_COLORS,
    showBigLegend,
    showChartHeader = true,
    bigLegendData,
    chartTitle,
    testId = 'LineChartTestId',
    showPreviousNumber = false,
    showPreviousNumberText = false,
    showPercentage = false,
    showBadge = false,
    bigLegendProps,
    showOutOfSeries = false,
    totalBudgetFormatted,
    totalBudgetUsedFormatted,
    replacements,
    isLoading,
    provideCustomTotals = false,
    seriesTotal,
    previousSeriesTotal,
    showInfoIcon,
    infoIconData,
    showTotalNumberSeries = true,
  } = props;

  const { lineChartOptions, renderKey } = useLineChartOptions(props);

  /**
   * Translate Series labels
   */
  const translateText = (textsList: lineChartBaseSeriesType[]) => {
    textsList.forEach((element: any, index: number) => {
      if (element && typeof element === 'object') {
        element.name = translationService.get(element.name, element.replacements ?? replacements).value;
      }
    });
  };
  useEffect(() => {
    try {
      translateText(series);
    } catch (err) {}
  }, [series]);

  /**
   * Getters
   */
  const getTotalSeriesValues = useGetTotalSeriesValues(series, previousSeries);

  const sumList = (list: number[]) => {
    let totalNumber = 0;
    list.forEach((number: number, index: number) => {
      totalNumber += number;
    });
    return totalNumber;
  };

  const getSeriesTotal = () => {
    if (provideCustomTotals) {
      return seriesTotal ?? 0;
    }
    return sumList(getTotalSeriesValues(series));
  };

  const getPreviousSeriesTotal = () => {
    if (provideCustomTotals) {
      return previousSeriesTotal ?? 0;
    }
    return sumList(getTotalSeriesValues(previousSeries));
  };

  const getBigLegendData = useCallback((): BigLegendItemProps[] => {
    const totalCurrent = getTotalSeriesValues(series);
    const totalPrevious = getTotalSeriesValues(previousSeries);

    if (bigLegendData) {
      bigLegendData.forEach((value, index) => {
        if (series[index]) {
          value.title = series[index].name;
        }

        // Calculate TOTALS
        if (!provideCustomTotals) {
          value.currentNumber = totalCurrent[index];
          if (previousSeries) {
            value.previousNumber = totalPrevious[index];
          }
        }

        if (colors) {
          value.iconFillColor = colors[index];
        }
      });
    }

    return bigLegendData as BigLegendItemProps[];
  }, [bigLegendData, series, previousSeries]);

  /**
   * Return view
   * ---
   */
  return (
    <div data-testid={testId} className={classNames('lineChart-container')}>
      <Render if={isLoading}>
        <ChartsPlaceholder />
      </Render>

      <Render if={showChartHeader}>
        <div className={classNames('lineChart-header')}>
          <BigLegendItem
            roundNumbers={true}
            showPreviousNumber={showPreviousNumber}
            showPreviousNumberText={showPreviousNumberText}
            showPercentage={showPercentage}
            showBadge={showBadge}
            currentNumber={getSeriesTotal()}
            previousNumber={getPreviousSeriesTotal()}
            totalNumber={getSeriesTotal()}
            totalNumberType={bigLegendProps?.totalNumberType}
            showOutOfSeries={showOutOfSeries}
            showTotalNumberSeries={showTotalNumberSeries}
            totalNumberSeries={!!totalBudgetFormatted ? [totalBudgetFormatted, totalBudgetUsedFormatted] : []}
            topTitle={chartTitle}
            testId={`${testId}_Title`}
            maxWidth={'60%'}
          />
        </div>
      </Render>

      <Chart
        key={renderKey}
        options={lineChartOptions}
        series={series}
        type="line"
        width={width ? width : '100%'}
        height={height ? height : '300px'}
      />

      {showInfoIcon && infoIconData && (
        <div className={'lineChart-infoIcon'}>
          <InfoIcon
            message={infoIconData.message}
            theme={'dark'}
            size={IconSize.small}
            maxWidth={'fit-content'}
            replacements={infoIconData.messageReplacements}
          />
          <Text type={TextTypes.textHelp} color={'--n700'}>
            {infoIconData.title}
          </Text>
        </div>
      )}

      {showBigLegend && bigLegendData && (
        <BigLegend
          testId={`${testId}_` + 'BigLegend'}
          roundNumbers={true}
          showBadge={showBadge}
          {...bigLegendProps}
          totalNumber={getSeriesTotal()}
          bigLegendData={getBigLegendData()}
        />
      )}
    </div>
  );
};

export const LineChartBase = LineChart;
export type LineChartBaseProps = LineChartProps;
