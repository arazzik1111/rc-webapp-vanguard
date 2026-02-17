
import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { AreaChart } from "./AreaChart";
import { Story } from "./stories/_AreaChart.default";
import { Default as _Default } from "./stories/Default.story";

export const Default: Story = { ..._Default };

export default {
  ...SbDecorator({
    title: "vanguard/Charts/AreaChart",
    component: AreaChart,
  }),
};

