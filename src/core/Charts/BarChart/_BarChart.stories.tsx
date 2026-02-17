import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { BarChart } from "./BarChart";
import { Story } from "./stories/_BarChart.default";
import { Default as _Default } from "./stories/Default.story";
import { WithCustomLegend as _WithCustomLegend } from "./stories/WithCustomLegend.story";

export const Default: Story = { ..._Default };
export const WithCustomLegend: Story = { ..._WithCustomLegend };

export default {
  ...SbDecorator({
    title: "vanguard/Charts/BarChart",
    component: BarChart,
  }),
};
