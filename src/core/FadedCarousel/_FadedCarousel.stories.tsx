import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { FadedCarousel } from "./FadedCarousel";
import { Story } from "./stories/_FadedCarousel.default";
import { Default as _Default } from "./stories/Default.story";
import { StartMode as _StartMode } from "./stories/StartMode.story";
import { CenterMode as _CenterMode } from "./stories/CenterMode.story";
import { CenterWithElementsBeforeAfter as _CenterWithElementsBeforeAfter } from "./stories/CenterWithElementsBeforeAfter.story";
import { ManyItems as _ManyItems } from "./stories/ManyItems.story";
import { WithMaxVisibleItems as _WithMaxVisibleItems } from "./stories/WithMaxVisibleItems.story";
import { WithScrollOffset as _WithScrollOffset } from "./stories/WithScrollOffset.story";
import { WithFadeDisabled as _WithFadeDisabled } from "./stories/WithFadeDisabled.story";
import { WithArrowsHideOnMobile as _WithArrowsHideOnMobile } from "./stories/WithArrowsHideOnMobile.story";
import { WithClassName as _WithClassName } from "./stories/WithClassName.story";

export const Default: Story = { ..._Default };
export const StartMode: Story = { ..._StartMode };
export const CenterMode: Story = { ..._CenterMode };
export const CenterWithElementsBeforeAfter: Story = { ..._CenterWithElementsBeforeAfter };
export const ManyItems: Story = { ..._ManyItems };
export const WithMaxVisibleItems: Story = { ..._WithMaxVisibleItems };
export const WithScrollOffset: Story = { ..._WithScrollOffset };
export const WithFadeDisabled: Story = { ..._WithFadeDisabled };
export const WithArrowsHideOnMobile: Story = { ..._WithArrowsHideOnMobile };
export const WithClassName: Story = { ..._WithClassName };

export default {
  ...SbDecorator({
    title: "Vanguard/FadedCarousel",
    component: FadedCarousel,
  }),
};
