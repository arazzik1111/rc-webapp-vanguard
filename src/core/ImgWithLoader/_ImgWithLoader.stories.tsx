
import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { ImgWithLoader } from "./ImgWithLoader";
import { Story } from "./stories/_ImgWithLoader.default";
import { Default as _Default } from "./stories/Default.story";
import { WithLoading as _WithLoading } from "./stories/WithLoading.story";
import { WithMediaType as _WithMediaType } from "./stories/WithMediaType.story";
import { WithVideoMediaType as _WithVideoMediaType } from "./stories/WithVideoMediaType.story";
import { WithAdditionalText as _WithAdditionalText } from "./stories/WithAdditionalText.story";
import { WithoutBorderRadius as _WithoutBorderRadius } from "./stories/WithoutBorderRadius.story";
import { Hidden as _Hidden } from "./stories/Hidden.story";
import { AllProps as _AllProps } from "./stories/AllProps.story";

export const Default: Story = { ..._Default };
export const WithLoading: Story = { ..._WithLoading };
export const WithMediaType: Story = { ..._WithMediaType };
export const WithVideoMediaType: Story = { ..._WithVideoMediaType };
export const WithAdditionalText: Story = { ..._WithAdditionalText };
export const WithoutBorderRadius: Story = { ..._WithoutBorderRadius };
export const Hidden: Story = { ..._Hidden };
export const AllProps: Story = { ..._AllProps };

export default {
  ...SbDecorator({
    title: "vanguard/ImgWithLoader",
    component: ImgWithLoader,
  }),
};
