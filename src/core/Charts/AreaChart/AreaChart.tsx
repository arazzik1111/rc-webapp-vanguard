import { ChartsPlaceholder } from '@vanguard/Charts/ChartsPlaceholder/ChartsPlaceholder';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { Render } from '@vanguard/Render/Render';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

import styles from './AreaChart.module.scss';

export interface AreaChartProps {
  series: any[];
  options?: ApexCharts.ApexOptions | object;
  width?: string | number;
  height?: string | number;
  isLoading?: boolean;
  testId?: string;
}

export const AreaChart = (props: AreaChartProps) => {
  const { options = {}, series, height = 150, isLoading, testId } = props;
  const defaultOptions: ApexCharts.ApexOptions = {
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
      id: 'basic-bar',
      width: '100%',
      sparkline: {
        enabled: true,
      },
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      curve: 'stepline',
      width: 2,
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    markers: {
      size: 0,
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  const optionsFinal = Object.assign(defaultOptions, options);
  const seriesFinal = [
    {
      name: 'area chart serie',
      data: series
        ? series.map((item) => {
            const value = item && item[1] ? item[1] : 0;
            return value ?? false;
          })
        : [],
    },
  ];

  return (
    <ComponentContainer className={styles.container} testId={testId}>
      <Render if={isLoading}>
        <ChartsPlaceholder />
      </Render>

      <ReactApexChart options={optionsFinal} series={seriesFinal} type="area" height={height} />
    </ComponentContainer>
  );
};
