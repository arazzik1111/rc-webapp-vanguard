import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { AnimatedSwitchConditional } from "./AnimatedSwitchConditional";
import { Story } from "./stories/_AnimatedSwitchConditional.default";
import { Default as _Default } from "./stories/Default.story";
import { WithConditionFalse as _WithConditionFalse } from "./stories/WithConditionFalse.story";
import { WithIfProp as _WithIfProp } from "./stories/WithIfProp.story";
import { WithClassName as _WithClassName } from "./stories/WithClassName.story";
import { WithNoneAnimation as _WithNoneAnimation } from "./stories/WithNoneAnimation.story";
import { WithFadeAnimation as _WithFadeAnimation } from "./stories/WithFadeAnimation.story";
import { WithSlideAnimation as _WithSlideAnimation } from "./stories/WithSlideAnimation.story";
import { WithZoomAnimation as _WithZoomAnimation } from "./stories/WithZoomAnimation.story";
import { WithBounceAnimation as _WithBounceAnimation } from "./stories/WithBounceAnimation.story";

export const Default: Story = { ..._Default };
export const WithConditionFalse: Story = { ..._WithConditionFalse };
export const WithIfProp: Story = { ..._WithIfProp };
export const WithClassName: Story = { ..._WithClassName };
export const WithNoneAnimation: Story = { ..._WithNoneAnimation };
export const WithFadeAnimation: Story = { ..._WithFadeAnimation };
export const WithSlideAnimation: Story = { ..._WithSlideAnimation };
export const WithZoomAnimation: Story = { ..._WithZoomAnimation };
export const WithBounceAnimation: Story = { ..._WithBounceAnimation };

export default {
  ...SbDecorator({
    title: "Vanguard/AnimatedSwitchConditional",
    component: AnimatedSwitchConditional,
  }),
};