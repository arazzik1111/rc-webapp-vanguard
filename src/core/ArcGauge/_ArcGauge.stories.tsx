
import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { ArcGauge } from "./ArcGauge";
import { Story } from "./stories/_ArcGauge.default";
import { Default as _Default } from "./stories/Default.story";
import { WithText as _WithText } from "./stories/WithText.story";
import { WithCustomColors as _WithCustomColors } from "./stories/WithCustomColors.story";
import { WithMaskSimple as _WithMaskSimple } from "./stories/WithMaskSimple.story";
import { WithValueZero as _WithValueZero } from "./stories/WithValueZero.story";
import { WithValueHundred as _WithValueHundred } from "./stories/WithValueHundred.story";

export const Default: Story = { ..._Default };
export const WithText: Story = { ..._WithText };
export const WithCustomColors: Story = { ..._WithCustomColors };
export const WithMaskSimple: Story = { ..._WithMaskSimple };
export const WithValueZero: Story = { ..._WithValueZero };
export const WithValueHundred: Story = { ..._WithValueHundred };

export default {
  ...SbDecorator({
    title: "vanguard/ArcGauge",
    component: ArcGauge,
  }),
};
