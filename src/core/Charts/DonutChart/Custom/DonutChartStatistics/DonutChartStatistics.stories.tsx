import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { DonutChartStatistics, DonutChartStatisticsProps } from "./DonutChartStatistics";

export default SbDecorator({
  title: "Vanguard/Charts/DonutChart",
  component: DonutChartStatistics,
  extra: {
    argTypes: {
      ...disableControls(["children"]),
      series: {
        defaultValue: [25, 8, 50, 10],
      },
      labels: {
        defaultValue: ["Published", "Publishing", "No access", "Actions required"],
      },
      badgeText: {
        defaultValue: ["+8%", "-5%", "-10%", "+3%"],
      },
      showBadge: {
        defaultValue: true,
      },
    },
  },
});

export const DonutChartStatisticsStory = (props: DonutChartStatisticsProps) => {
  return <DonutChartStatistics {...props} />;
};
