import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { Divider } from "./Divider";
import { Story } from "./stories/_Divider.default";
import { Default as _Default } from "./stories/Default.story";
import { WithCustomClass as _WithCustomClass } from "./stories/WithCustomClass.story";
import { InList as _InList } from "./stories/InList.story";
import { WithId as _WithId } from "./stories/WithId.story";

export const Default: Story = { ..._Default };
export const WithCustomClass: Story = { ..._WithCustomClass };
export const InList: Story = { ..._InList };
export const WithId: Story = { ..._WithId };

export default {
  ...SbDecorator({
    title: "Vanguard/Divider",
    component: Divider,
  }),
};