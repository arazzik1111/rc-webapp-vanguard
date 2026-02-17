import { BigLegendItem } from "./BigLegendItem";
import { SbDecorator, disableControls } from "@test-utils/get-storybook-decorator";
import { Story } from "./stories/_BigLegendItem.default";

// Import all stories
import { Default as _Default } from "./stories/Default.story";
import { WithPercentage as _WithPercentage } from "./stories/WithPercentage.story";
import { WithCurrency as _WithCurrency } from "./stories/WithCurrency.story";
import { NegativeChange as _NegativeChange } from "./stories/NegativeChange.story";
import { WithTopTitle as _WithTopTitle } from "./stories/WithTopTitle.story";
import { OutOfSeries as _OutOfSeries } from "./stories/OutOfSeries.story";
import { WithAvatar as _WithAvatar } from "./stories/WithAvatar.story";
import { CustomStyling as _CustomStyling } from "./stories/CustomStyling.story";

// Export all stories
export const Default: Story = { ..._Default };
export const WithPercentage: Story = { ..._WithPercentage };
export const WithCurrency: Story = { ..._WithCurrency };
export const NegativeChange: Story = { ..._NegativeChange };
export const WithTopTitle: Story = { ..._WithTopTitle };
export const OutOfSeries: Story = { ..._OutOfSeries };
export const WithAvatar: Story = { ..._WithAvatar };
export const CustomStyling: Story = { ..._CustomStyling };

export default {
  ...SbDecorator({
    title: "vanguard/Charts/BigLegend/BigLegendItem",
    component: BigLegendItem,
    extra: {
      ...disableControls([""]),
    },
    opts: {
      withRedux: true,
    },
  }),
};
