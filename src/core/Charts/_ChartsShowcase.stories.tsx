import React from "react";
import { AreaChart } from "./AreaChart/AreaChart";
import { BarChart } from "./BarChart/BarChart";
import { BigLegend } from "./BigLegend/BigLegend";
import { ChartTabs } from "./ChartTabs/ChartTabs";
import { DonutChart } from "./DonutChart/DonutChart";
import { HSBChart } from "./HSBChart/HSBChart";
import { LineChartBase as LineChart } from "./LineChart/LineChart";
import { ChartsPlaceholder } from "./ChartsPlaceholder/ChartsPlaceholder";
import { IconNames } from "@vanguard/Icon/IconNames";
import chartsDescription from "./ChartsShowcase.description.md?raw";

export const Showcase: React.FC = () => {
  // Mock data for charts
  const areaSeries = [
    [10, 20],
    [15, 25],
    [20, 30],
    [25, 35],
    [30, 40],
  ];

  const barSeries = [
    { name: "Series 1", data: [10, 20, 30] },
    { name: "Series 2", data: [15, 25, 35] },
  ];
  const barCategories = ["Jan", "Feb", "Mar"];
  const barCustomLegendItems = ["Series 1", "Series 2"];

  const bigLegendData = [
    {
      currentNumber: 110,
      previousNumber: 105,
      title: "Website",
      description: "Website clicks made from our Business Profile",
    },
    {
      currentNumber: 26000,
      previousNumber: 25000,
      title: "Directions",
      description: "Direction requests made from your Business Profile",
    },
  ];

  const chartTabs = [
    { name: "Overview", icon: IconNames.lineChart },
    { name: "Demographics", icon: IconNames.user },
    { name: "Platforms", icon: IconNames.duplicate },
  ];

  const donutSeries = [30, 40, 30];
  const donutLabels = ["Category A", "Category B", "Category C"];

  const hsbSeries = [
    { name: "Series 1", data: [10, 20, 30] },
    { name: "Series 2", data: [15, 25, 35] },
  ];
  const hsbCategories = ["Jan", "Feb", "Mar"];

  const lineSeries: Array<{ name: string; data: [number, number | null][] }> = [
    { name: "Series 1", data: [[1, 10], [2, 15], [3, 20], [4, 25], [5, 30]] },
    { name: "Series 2", data: [[1, 12], [2, 18], [3, 22], [4, 28], [5, 32]] },
  ];

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "40px" }}>
      <h1>Charts Showcase</h1>

      <section>
        <h2>Area Chart</h2>
        <p>A chart that displays data as filled areas under lines, useful for showing trends over time or categories.</p>
        <AreaChart options={{}} series={areaSeries} isLoading={false} testId="area-chart-showcase" />
      </section>

      <section>
        <h2>Bar Chart</h2>
        <p>A chart that displays data as rectangular bars, ideal for comparing values across categories.</p>
        <BarChart
          series={barSeries}
          categories={barCategories}
          showLegend={true}
          customLegendItems={barCustomLegendItems}
          isLoading={false}
          testId="bar-chart-showcase"
        />
      </section>

      <section>
        <h2>Big Legend</h2>
        <p>A large legend component that displays key metrics with trends and values.</p>
        <BigLegend bigLegendData={bigLegendData} isLoading={false} testId="big-legend-showcase" />
      </section>

      <section>
        <h2>Chart Tabs</h2>
        <p>A tabbed interface for switching between different chart views.</p>
        <ChartTabs tabs={chartTabs} testId="chart-tabs-showcase" />
      </section>

      <section>
        <h2>Donut Chart</h2>
        <p>A circular chart divided into segments, showing proportions of a whole.</p>
        <DonutChart series={donutSeries} labels={donutLabels} isLoading={false} testId="donut-chart-showcase" />
      </section>

      <section>
        <h2>HSB Chart</h2>
        <p>A specialized chart for displaying horizontal stacked bar data.</p>
        <HSBChart series={hsbSeries} categories={hsbCategories} isLoading={false} testId="hsb-chart-showcase" />
      </section>

      <section>
        <h2>Line Chart</h2>
        <p>A chart that displays data points connected by straight lines, perfect for showing trends over time.</p>
        <LineChart series={lineSeries} isLoading={false} testId="line-chart-showcase" />
      </section>

      
    </div>
  );
};

export default {
  title: "vanguard/Charts/ChartsShowcase",
  component: Showcase,
  parameters: {
    docs: {
      description: {
        component: chartsDescription,
      },
    },
  },
};