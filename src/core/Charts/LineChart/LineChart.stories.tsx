import { LineChartBase, LineChartBaseProps } from "./LineChart";
import React from "react";
import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { IconNames } from "@vanguard/Icon/IconNames";

const series = [
  {
    name: "Website clicks",
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
    name: "Directions",
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
    name: "Calls",
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

const previousSeries = [
  {
    name: "Website clicks",
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
    name: "Directions",
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
    name: "Calls",
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

const bigLegendData = [
  {
    iconName: IconNames.notification,
    description: "Website clicks made from our Business Profile",
  },

  {
    iconName: IconNames.upload,
    description: "Direction requests made from your Business Profile",
  },

  {
    iconName: IconNames.phone,
    description: "Calls made from your Business Profile",
  },
];

export default SbDecorator({
  title: "Vanguard/Charts/LineChart",
  component: LineChartBase,
  extra: {
    argTypes: {
      series: {
        defaultValue: series,
      },
      previousSeries: {
        defaultValue: previousSeries,
      },
      colors: {
        defaultValue: ["--p500", "--s400", "--a2900"],
      },
      height: {
        defaultValue: "281px",
      },
      width: {
        defaultValue: "100%",
      },
      yaxisTickAmount: {
        defaultValue: 4,
      },
      yaxisMin: {
        defaultValue: 0,
      },
      yaxisMax: {
        defaultValue: 600,
      },
      showBigLegend: {
        defaultValue: true,
      },
      bigLegendData: {
        defaultValue: bigLegendData,
      },
      chartTitle: {
        defaultValue: "Total actions",
      },
    },
  },
});

export const LineChartStory = (props: LineChartBaseProps) => {
  return (
    <div style={{ width: "100%" }}>
      <LineChartBase {...props} />
    </div>
  );
};
