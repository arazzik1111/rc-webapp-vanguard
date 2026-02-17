import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { ImgLoader } from "./ImgLoader";
import { Story } from "./stories/_ImgLoader.default";
import { Default as _Default } from "./stories/Default.story";
import { WithTitle as _WithTitle } from "./stories/WithTitle.story";
import { WithDescription as _WithDescription } from "./stories/WithDescription.story";
import { WithTitleAndDescription as _WithTitleAndDescription } from "./stories/WithTitleAndDescription.story";
import { WithReplacements as _WithReplacements } from "./stories/WithReplacements.story";
import { AllProps as _AllProps } from "./stories/AllProps.story";

export const Default: Story = { ..._Default };
export const WithTitle: Story = { ..._WithTitle };
export const WithDescription: Story = { ..._WithDescription };
export const WithTitleAndDescription: Story = { ..._WithTitleAndDescription };
export const WithReplacements: Story = { ..._WithReplacements };
export const AllProps: Story = { ..._AllProps };

export default {
  ...SbDecorator({
    title: "vanguard/ImgLoader",
    component: ImgLoader,
  }),
};
