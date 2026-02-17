
import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { AIOrb } from "./AIOrb";
import { Story } from "./stories/_AIOrb.default";
import { Default as _Default } from "./stories/Default.story";
import { Thinking as _Thinking } from "./stories/Thinking.story";
import { Error as _Error } from "./stories/Error.story";
import { Warning as _Warning } from "./stories/Warning.story";
import { Disconnected as _Disconnected } from "./stories/Disconnected.story";
import { SmallSize as _SmallSize } from "./stories/SmallSize.story";
import { LargeSize as _LargeSize } from "./stories/LargeSize.story";
import { WithClassName as _WithClassName } from "./stories/WithClassName.story";

export const Default: Story = { ..._Default };
export const Thinking: Story = { ..._Thinking };
export const Error: Story = { ..._Error };
export const Warning: Story = { ..._Warning };
export const Disconnected: Story = { ..._Disconnected };
export const SmallSize: Story = { ..._SmallSize };
export const LargeSize: Story = { ..._LargeSize };
export const WithClassName: Story = { ..._WithClassName };

export default {
  ...SbDecorator({
    title: "Vanguard/AIOrb",
    component: AIOrb,
  }),
};