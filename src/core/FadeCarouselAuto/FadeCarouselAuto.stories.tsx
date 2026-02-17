import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { FadeCarouselAuto } from "./FadeCarouselAuto";
import { Story } from "./stories/_FadeCarouselAuto.default.tsx";
import { Default as _Default } from "./stories/Default.story";
import { WithGap as _WithGap } from "./stories/WithGap.story";
import { WithSpeed as _WithSpeed } from "./stories/WithSpeed.story";
import { WithInterval as _WithInterval } from "./stories/WithInterval.story";
import { CustomProps as _CustomProps } from "./stories/CustomProps.story";

export default {
  ...SbDecorator({
    title: "vanguard/FadeCarouselAuto",
    component: FadeCarouselAuto,
  }),
};

export const Default: Story = { ..._Default };
export const WithGap: Story = { ..._WithGap };
export const WithSpeed: Story = { ..._WithSpeed };
export const WithInterval: Story = { ..._WithInterval };
export const CustomProps: Story = { ..._CustomProps };
