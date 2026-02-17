## Charts Usage

The Vanguard library provides a comprehensive set of chart components for data visualization. Below is an overview of the available chart types and their usage.

### Available Chart Components

#### AreaChart
Displays data as filled areas under lines, useful for showing trends over time or categories.

```tsx
import { AreaChart } from '@vanguard/Charts/AreaChart';

<AreaChart
  options={{}}
  series={[[10, 20], [15, 25], [20, 30]]}
  isLoading={false}
  testId="area-chart"
/>
```

#### BarChart
Displays data as rectangular bars, ideal for comparing values across categories.

```tsx
import { BarChart } from '@vanguard/Charts/BarChart';

<BarChart
  series={[
    { name: "Series 1", data: [10, 20, 30] },
    { name: "Series 2", data: [15, 25, 35] }
  ]}
  categories={["Jan", "Feb", "Mar"]}
  showLegend={true}
  isLoading={false}
  testId="bar-chart"
/>
```

#### BigLegend
A large legend component that displays key metrics with trends and values.

```tsx
import { BigLegend } from '@vanguard/Charts/BigLegend';

<BigLegend
  bigLegendData={[
    {
      currentNumber: 110,
      previousNumber: 105,
      title: "Website",
      description: "Website clicks"
    }
  ]}
  isLoading={false}
  testId="big-legend"
/>
```

#### ChartTabs
A tabbed interface for switching between different chart views.

```tsx
import { ChartTabs } from '@vanguard/Charts/ChartTabs';

<ChartTabs
  tabs={[
    { name: "Overview", icon: IconNames.lineChart },
    { name: "Demographics", icon: IconNames.user }
  ]}
  testId="chart-tabs"
/>
```

#### DonutChart
A circular chart divided into segments, showing proportions of a whole.

```tsx
import { DonutChart } from '@vanguard/Charts/DonutChart';

<DonutChart
  series={[30, 40, 30]}
  labels={["Category A", "Category B", "Category C"]}
  isLoading={false}
  testId="donut-chart"
/>
```

#### HSBChart
A specialized chart for displaying horizontal stacked bar data.

```tsx
import { HSBChart } from '@vanguard/Charts/HSBChart';

<HSBChart
  series={[
    { name: "Series 1", data: [10, 20, 30] },
    { name: "Series 2", data: [15, 25, 35] }
  ]}
  categories={["Jan", "Feb", "Mar"]}
  isLoading={false}
  testId="hsb-chart"
/>
```

#### LineChart
Displays data points connected by straight lines, perfect for showing trends over time.

```tsx
import { LineChartBase as LineChart } from '@vanguard/Charts/LineChart';

<LineChart
  series={[
    { name: "Series 1", data: [[1, 10], [2, 15], [3, 20]] },
    { name: "Series 2", data: [[1, 12], [2, 18], [3, 22]] }
  ]}
  isLoading={false}
  testId="line-chart"
/>
```

### Common Props

All chart components support:
- `isLoading`: Boolean to show loading state
- `testId`: String for testing purposes

### Data Formats

- **Series data**: Arrays of numbers or objects with `name` and `data` properties
- **Categories**: Array of strings for axis labels
- **Options**: Chart-specific configuration objects