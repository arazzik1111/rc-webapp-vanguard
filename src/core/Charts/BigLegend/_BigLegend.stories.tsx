import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { BigLegend } from "./BigLegend";
import { Story } from "./stories/_BigLegend.default";
import { Default as _Default } from "./stories/Default.story";
import { WithPercentage as _WithPercentage } from "./stories/WithPercentage.story";
import { MixedTrends as _MixedTrends } from "./stories/MixedTrends.story";
import { TimeDisplay as _TimeDisplay } from "./stories/TimeDisplay.story";
import { OutOfSeries as _OutOfSeries } from "./stories/OutOfSeries.story";
import { Loading as _Loading } from "./stories/Loading.story";
import { CustomStyling as _CustomStyling } from "./stories/CustomStyling.story";

export const Default: Story = { ..._Default };
export const WithPercentage: Story = { ..._WithPercentage };
export const MixedTrends: Story = { ..._MixedTrends };
export const TimeDisplay: Story = { ..._TimeDisplay };
export const OutOfSeries: Story = { ..._OutOfSeries };
export const Loading: Story = { ..._Loading };
export const CustomStyling: Story = { ..._CustomStyling };

export default {
  ...SbDecorator({
    title: "vanguard/Charts/BigLegend",
    component: BigLegend,
    opts: {
      withRedux: true,
    },
  }),
};
