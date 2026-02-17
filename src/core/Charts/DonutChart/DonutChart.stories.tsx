import {
  DonutChart,
  DonutChartProps
} from "./DonutChart";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { Text } from "@vanguard/Text/Text";

export default SbDecorator({
  title: "Vanguard/Charts/DonutChart",
  component: DonutChart,
  extra: {
    argTypes: {
      ...disableControls([
        "children",
      ]),
      series: {
        defaultValue: [25, 30, 45]
      },
      labels: {
        defaultValue: ["Gray", "Blue", "Dark"]
      },
      colors: {
        defaultValue: ["var(--n200)", "var(--p500)", "var(--(n600)"]
      },
      showTooltip: {
        defaultValue: true,
      }
    },
  },
});

export const DonutChartStory = (props: DonutChartProps) => {
  return (
    <div>
      <DonutChart {...props}>
        <Text>This can be anything</Text>
      </DonutChart>
    </div>
  );
};
