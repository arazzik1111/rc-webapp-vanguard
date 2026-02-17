import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { HSBChart } from "@vanguard/Charts/HSBChart/HSBChart";
import { HSBCHART_EXCLUDED_CONTROLS_DEFAULT, hsbChartArgTypes, Story } from "./stories/_HSBChart.default";
import { Default as _Default } from "./stories/Default.story";
import { WithCustomLegend as _WithCustomLegend } from "./stories/WithCustomLegend.story";
import { Loading as _Loading } from "./stories/Loading.story";
import { NoLegend as _NoLegend } from "./stories/NoLegend.story";
import { WithApexLegend as _WithApexLegend } from "./stories/WithApexLegend.story";

export const Default: Story = { ..._Default };
export const WithCustomLegend: Story = { ..._WithCustomLegend };
export const Loading: Story = { ..._Loading };
export const NoLegend: Story = { ..._NoLegend };
export const WithApexLegend: Story = { ..._WithApexLegend };

export default {
  ...SbDecorator({
    title: "Vanguard/Charts/HSBChart",
    component: HSBChart,
    extra: {
      argTypes: {
        ...disableControls(HSBCHART_EXCLUDED_CONTROLS_DEFAULT),
        ...hsbChartArgTypes,
      },
    },
  }),
};
