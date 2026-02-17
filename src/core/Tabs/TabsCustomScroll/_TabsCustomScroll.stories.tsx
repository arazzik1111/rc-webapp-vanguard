import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { TabsCustomScroll } from "./TabsCustomScroll";
import { Story } from "./stories/_TabsCustomScroll.default";
import { Default as _Default } from "./stories/Default.story";
import { LeftDirection as _LeftDirection } from "./stories/LeftDirection.story";
import { RightDirection as _RightDirection } from "./stories/RightDirection.story";
import { Disabled as _Disabled } from "./stories/Disabled.story";

export const Default: Story = { ..._Default };
export const LeftDirection: Story = { ..._LeftDirection };
export const RightDirection: Story = { ..._RightDirection };
export const Disabled: Story = { ..._Disabled };

export default {
  ...SbDecorator({
    title: "Vanguard/Tabs/TabsCustomScroll",
    component: TabsCustomScroll,
    extra: {
      args: {
        direction: "left",
        onClick: () => console.log("Scroll clicked"),
        disabled: false,
      },
    },
  }),
};
