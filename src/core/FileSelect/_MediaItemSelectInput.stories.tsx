import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { MediaItemSelectInput } from "./MediaItemSelectInput";
import { Story } from "./stories/_MediaItemSelectInput.default";
import { Default as _Default } from "./stories/Default.story";
import { WithMultiple as _WithMultiple } from "./stories/WithMultiple.story";
import { WithAccept as _WithAccept } from "./stories/WithAccept.story";
import { WithTransformers as _WithTransformers } from "./stories/WithTransformers.story";
import { WithProcessors as _WithProcessors } from "./stories/WithProcessors.story";
import { WithValidators as _WithValidators } from "./stories/WithValidators.story";

export const Default: Story = { ..._Default };
export const WithMultiple: Story = { ..._WithMultiple };
export const WithAccept: Story = { ..._WithAccept };
export const WithTransformers: Story = { ..._WithTransformers };
export const WithProcessors: Story = { ..._WithProcessors };
export const WithValidators: Story = { ..._WithValidators };

export default {
  ...SbDecorator({
    title: "Vanguard/MediaItemSelectInput",
    component: MediaItemSelectInput,
  }),
};