import React from "react";
import { StoryObj } from "@storybook/react";
import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { LineChartBase, LineChartBaseProps, lineChartBaseSeriesType } from "@vanguard/Charts/LineChart/LineChart";
import { baseStore } from "@stores/redux-base.store.ts";

/**
 * 1-DAY, 1 point scenario
 */
const oneDayOnePointSeries: lineChartBaseSeriesType[] = [
  {
    name: "Series A (1 Day)",
    data: [
      [1735776000000, 120], // 2025-01-02 00:00
    ],
  },
  {
    name: "Series B (1 Day)",
    data: [[1735776000000, 85]],
  },
];

/**
 * 1-DAY scenario
 */
const oneDaySeries: lineChartBaseSeriesType[] = [
  {
    name: "Series A (1 Day)",
    data: [
      [1735776000000, 120], // 2025-01-02 00:00
      [1735819200000, 210], // 2025-01-02 12:00
    ],
  },
  {
    name: "Series B (1 Day)",
    data: [
      [1735776000000, 85],
      [1735819200000, 170],
    ],
  },
];

/**
 * 2-DAY scenario
 */
const twoDaySeries: lineChartBaseSeriesType[] = [
  {
    name: "Series A (2 Days)",
    data: [
      [1735776000000, 95], // 2025-01-02 00:00
      [1735862400000, 140], // 2025-01-03 00:00
      [1735948800000, 180], // 2025-01-04 00:00
    ],
  },
  {
    name: "Series B (2 Days)",
    data: [
      [1735776000000, 60],
      [1735862400000, 130],
      [1735948800000, 250],
    ],
  },
];

/**
 * "EDGE" scenario: ~2.5 days
 * - Jan 2 @ 00:00
 * - Jan 3 @ 00:00 (1 day later)
 * - Jan 4 @ 00:00 (2 days later)
 * - Jan 4 @ 12:00 (2 days + 12 hours)
 */
const edgeCaseSeries: lineChartBaseSeriesType[] = [
  {
    name: "EdgeCase ~2.5 Days",
    data: [
      [1735776000000, 100], // 2025-01-02 00:00
      [1735862400000, 140], // 2025-01-03 00:00
      [1735948800000, 200], // 2025-01-04 00:00
      [1735992000000, 250], // 2025-01-04 12:00
    ],
  },
  {
    name: "EdgeCase Series B",
    data: [
      [1735776000000, 90],
      [1735862400000, 160],
      [1735948800000, 210],
      [1735992000000, 300],
    ],
  },
];

/**
 * 3-DAY scenario
 */
const threeDaySeries: lineChartBaseSeriesType[] = [
  {
    name: "Series A (3 Days)",
    data: [
      [1735776000000, 130], // 2025-01-02
      [1736035200000, 220], // 2025-01-05
      [1736294400000, 300], // 2025-01-08
      [1736553600000, 400], // 2025-01-11
    ],
  },
  {
    name: "Series B (3 Days)",
    data: [
      [1735776000000, 100],
      [1736035200000, 280],
      [1736294400000, 320],
      [1736553600000, 370],
    ],
  },
];

/**
 * 20-DAY scenario
 */
const twentyDaySeries: lineChartBaseSeriesType[] = [
  {
    name: "Series A (20 Days)",
    data: Array.from({ length: 20 }, (_, i) => {
      const baseTime = 1735776000000; // 2025-01-02T00:00:00
      return [baseTime + i * 86400000, 100 + i * 10]; // every day +10 units
    }),
  },
  {
    name: "Series B (20 Days)",
    data: Array.from({ length: 20 }, (_, i) => {
      const baseTime = 1735776000000; // same base
      return [baseTime + i * 86400000, 80 + i * 15]; // every day +15 units
    }),
  },
];

/**
 * Default export for your storybook folder + component
 */
export default {
  ...SbDecorator({
    title: "Vanguard/Charts/LineChart/EdgeCaseDates",
    component: LineChartBase,
    opts: {
      withRedux: true,
      customStore: baseStore,
    },
  }),
};

type Story = StoryObj<typeof LineChartBase>;

/**
 * 1-day, 1 point chart
 */
export const ZeroDayOnePointChart: Story = {
  args: {
    series: oneDayOnePointSeries,
    chartTitle: "One Day (1 point)",
    showLegend: true,
    isLoading: false,
    showBigLegend: true,
    showChartHeader: true,
  } as LineChartBaseProps,
};
/**
 * 1-day chart
 */
export const OneDayChart: Story = {
  args: {
    series: oneDaySeries,
    chartTitle: "One Day (2 points)",
    showLegend: true,
    isLoading: false,
    showBigLegend: true,
    showChartHeader: true,
  } as LineChartBaseProps,
};

/**
 * 2-day chart
 */
export const TwoDaysChart: Story = {
  args: {
    series: twoDaySeries,
    chartTitle: "Two Days (~2 days total)",
    showLegend: true,
    isLoading: false,
    showBigLegend: true,
    showChartHeader: true,
  } as LineChartBaseProps,
};

/**
 * ~2.5 days - "Edge" scenario to see if it still shows hours
 */
export const TwoAndHalfDaysChart: Story = {
  args: {
    series: edgeCaseSeries,
    chartTitle: "Edge Case (2.5 Days)",
    showLegend: true,
    isLoading: false,
    showBigLegend: true,
    showChartHeader: true,
  } as LineChartBaseProps,
};

/**
 * 3-day chart
 */
export const ThreeDaysChart: Story = {
  args: {
    series: threeDaySeries,
    chartTitle: "Three Days (4 data points)",
    showLegend: true,
    isLoading: false,
    showBigLegend: true,
    showChartHeader: true,
  } as LineChartBaseProps,
};

/**
 * 20-day chart
 */
export const TwentyDaysChart: Story = {
  args: {
    series: twentyDaySeries,
    chartTitle: "Twenty Days (20 data points)",
    showLegend: true,
    isLoading: false,
    showBigLegend: true,
    showChartHeader: true,
  } as LineChartBaseProps,
};
