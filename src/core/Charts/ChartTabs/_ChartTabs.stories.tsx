import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { ChartTabs } from "./ChartTabs";
import { Story } from "./stories/_ChartTabs.default";
import { Default as _Default } from "./stories/Default.story";

export const Default: Story = { ..._Default };

export default {
  ...SbDecorator({
    title: "vanguard/Charts/ChartTabs",
    component: ChartTabs,
  }),
};
