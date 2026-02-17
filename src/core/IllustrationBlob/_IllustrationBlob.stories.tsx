import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { IllustrationBlob } from "./IllustrationBlob";
import { Story } from "./stories/_IllustrationBlob.default";
import { Default as _Default } from "./stories/Default.story";
import { WithIcon as _WithIcon } from "./stories/WithIcon.story";
import { WithImage as _WithImage } from "./stories/WithImage.story";
import { WithIconAndImage as _WithIconAndImage } from "./stories/WithIconAndImage.story";
import { WithImageOnly as _WithImageOnly } from "./stories/WithImageOnly.story";
import { WithImageAlignments as _WithImageAlignments } from "./stories/WithImageAlignments.story";
import { WithColor as _WithColor } from "./stories/WithColor.story";
import { AllProps as _AllProps } from "./stories/AllProps.story";

export const Default: Story = { ..._Default };
export const WithIcon: Story = { ..._WithIcon };
export const WithImage: Story = { ..._WithImage };
export const WithIconAndImage: Story = { ..._WithIconAndImage };
export const WithImageOnly: Story = { ..._WithImageOnly };
export const WithImageAlignments: Story = { ..._WithImageAlignments };
export const WithColor: Story = { ..._WithColor };
export const AllProps: Story = { ..._AllProps };

export default {
  ...SbDecorator({
    title: "vanguard/IllustrationBlob",
    component: IllustrationBlob,
  }),
};
