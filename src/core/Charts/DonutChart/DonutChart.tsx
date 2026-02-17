import { parseCssVariable } from '@helpers/css-variables-parser';
import { translationService } from '@services/translation.service';
import { ChartsPlaceholder } from '@vanguard/Charts/ChartsPlaceholder/ChartsPlaceholder';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { Render } from '@vanguard/Render/Render';
import { Text } from '@vanguard/Text/Text';
import { ApexOptions } from 'apexcharts';
import React, { ReactNode, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

import styles from './DonutChart.module.scss';

export interface DonutChartProps {
  series: number[];
  labels?: string[];
  colors?: string[];
  renderChildrenFn?: (index: number, series: number, labels?: string, colors?: string) => ReactNode;
  renderChildrenNotHoveredFn?: () => ReactNode;
  testId?: string;
  isLoading?: boolean;
  showLegend?: boolean;
}

export const DonutChart = (props: DonutChartProps) => {
  const {
    series,
    labels = [],
    colors = [],
    renderChildrenFn,
    renderChildrenNotHoveredFn,
    testId,
    isLoading,
    showLegend = false,
  } = props;
  const [children, setChildren] = useState<ReactNode>(null);

  /**
   * Get Data in Apex Chart format
   */
  const getColors = (colors: string[]): string[] | undefined => {
    return colors.map((color) => {
      return parseCssVariable(color);
    });
  };
  const getLabels = (labels: string[]): string[] | undefined => {
    return labels.map((label) => {
      return translationService.get(label).value;
    });
  };

  /**
   * Event: Render children
   */
  const renderChildren = (index: number) => {
    if (index === -1 && renderChildrenNotHoveredFn) {
      setChildren(renderChildrenNotHoveredFn());
      return;
    }

    if (renderChildrenFn) {
      setChildren(renderChildrenFn(index, series[index], labels[index], colors[index]));
      return;
    }

    setChildren(
      <div>
        <Text>{labels[index]}</Text>
        <Text>{series[index]}</Text>
      </div>,
    );
  };

  /**
   * Options
   */
  const options: ApexOptions = {
    ...(labels.length ? { labels: getLabels(labels) } : {}), // Labels of the donut slices
    fill: {
      ...(colors.length ? { colors: getColors(colors) } : {}), // Colors of the donut slices
    },
    dataLabels: {
      enabled: false, // Data on the donut slices
    },
    chart: {
      events: {
        dataPointSelection: function (event, chartContext, config) {
          renderChildren(config.dataPointIndex);
        },
        dataPointMouseEnter: function (event, chartContext, config) {
          renderChildren(config.dataPointIndex);
        },
        dataPointMouseLeave: function () {
          if (renderChildrenNotHoveredFn) {
            renderChildren(-1);
          }
        },
        mounted: function () {
          if (renderChildrenNotHoveredFn) {
            renderChildren(-1);
          } else {
            // Set initial value for the Donut Children to first non-zero index
            let firstNotZeroIndex = 0;
            for (let i = 0; i < series.length; i++) {
              if (series[i] != 0) {
                firstNotZeroIndex = i;
                break;
              }
            }
            renderChildren(firstNotZeroIndex);
          }
        },
      },
    },
    tooltip: {
      enabled: false, // Appears on hovering a donut slice
      fillSeriesColor: false,
      theme: 'light',
      marker: {
        show: false,
      },
      style: {
        fontSize: 'inherit',
        fontFamily: 'inherit',
      },
    },
    legend: {
      show: showLegend,
      position: 'bottom',
      horizontalAlign: 'center',
      formatter: (seriesName, opts) => {
        const index = opts.seriesIndex;
        const percent = `${((series[index] / series.reduce((a, b) => a + b, 0)) * 100).toFixed(1)}%`;
        return `<div class="legend-labels">${seriesName}<br/><span class="legend-percentage">${percent}</span></div>`;
      },
      markers: {
        fillColors: getColors(colors),
      },
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        customScale: 1.08, // make the donut have the right size (172px)
        expandOnClick: false,
        donut: {
          size: '85%',
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'lighten',
          value: 0.05,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
  };

  /**
   * Return view
   * ---
   */
  return (
    <ComponentContainer
      className={styles.donut}
      testId={testId ?? 'DonutChart'}
      style={{ height: showLegend ? 203 : '' }}
    >
      <Render if={isLoading}>
        <ChartsPlaceholder />
      </Render>

      <div className={styles.innerContainer} style={{ width: showLegend ? 280 : '' }}>
        <ReactApexChart type="donut" options={options} series={series} />
        <div className={styles.children}>{children}</div>
      </div>
    </ComponentContainer>
  );
};
