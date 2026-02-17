import React from "react";
import {disableControls, SbDecorator} from "@test-utils/get-storybook-decorator";
import { DonutChartDirectories, DonutChartDirectoriesProps } from "./DonutChartDirectories";

export default SbDecorator({
  title: "Vanguard/Charts/DonutChart",
  component: DonutChartDirectories,
  extra: {
    argTypes: {
      ...disableControls([
        "children",
      ]),
      series: {
        defaultValue: [25, 8, 0, 0]
      },
      labels: {
        defaultValue: ["Published", "Publishing", "No access", "Actions required"]
      },
      colors: {
        defaultValue: ["var(--s400)", "var(--n400)", "var(--e400)", "var(--i400)"]
      },
      badgeStatuses: {
        defaultValue: ["success", "publishing", "danger", "info"]
      }
    },
  },
});

export const DonutChartDirectoriesStory = (props: DonutChartDirectoriesProps) => {
  return (
    <DonutChartDirectories {...props}/>
  );
};