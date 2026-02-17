import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { AnimatedConditional } from "./AnimatedConditional";
import { Story } from "./stories/_AnimatedConditional.default";
import { Default as _Default } from "./stories/Default.story";
import { WithNoneAnimation as _WithNoneAnimation } from "./stories/WithNoneAnimation.story";
import { WithGrowWidth as _WithGrowWidth } from "./stories/WithGrowWidth.story";
import { WithGrowHeight as _WithGrowHeight } from "./stories/WithGrowHeight.story";
import { WithConditionFalse as _WithConditionFalse } from "./stories/WithConditionFalse.story";
import { WithClassName as _WithClassName } from "./stories/WithClassName.story";
import { WithTestId as _WithTestId } from "./stories/WithTestId.story";

export const Default: Story = { ..._Default };
export const WithNoneAnimation: Story = { ..._WithNoneAnimation };
export const WithGrowWidth: Story = { ..._WithGrowWidth };
export const WithGrowHeight: Story = { ..._WithGrowHeight };
export const WithConditionFalse: Story = { ..._WithConditionFalse };
export const WithClassName: Story = { ..._WithClassName };
export const WithTestId: Story = { ..._WithTestId };

export default {
  ...SbDecorator({
    title: "Vanguard/AnimatedConditional",
    component: AnimatedConditional,
  }),
};
