import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { AvatarStack } from "./AvatarStack";
import { Story } from "./stories/_AvatarStack.default";
import { Default as _Default } from "./stories/Default.story";
import { WithCustomStackWidth as _WithCustomStackWidth } from "./stories/WithCustomStackWidth.story";
import { WithCustomDefaultBorderColor as _WithCustomDefaultBorderColor } from "./stories/WithCustomDefaultBorderColor.story";
import { WithClassName as _WithClassName } from "./stories/WithClassName.story";
import { SingleItem as _SingleItem } from "./stories/SingleItem.story";
import { Empty as _Empty } from "./stories/Empty.story";
import { ManyItems as _ManyItems } from "./stories/ManyItems.story";

export const Default: Story = { ..._Default };
export const WithCustomStackWidth: Story = { ..._WithCustomStackWidth };
export const WithCustomDefaultBorderColor: Story = { ..._WithCustomDefaultBorderColor };
export const WithClassName: Story = { ..._WithClassName };
export const SingleItem: Story = { ..._SingleItem };
export const Empty: Story = { ..._Empty };
export const ManyItems: Story = { ..._ManyItems };

export default {
  ...SbDecorator({
    title: "vanguard/AvatarStack",
    component: AvatarStack,
  }),
};
