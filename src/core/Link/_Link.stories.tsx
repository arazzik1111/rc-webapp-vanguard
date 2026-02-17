import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { Link } from "./Link";
import { Story } from "./stories/_Link.default";
import { Default as _Default } from "./stories/Default.story";
import { WithOnClick as _WithOnClick } from "./stories/WithOnClick.story";
import { WithIconLeft as _WithIconLeft } from "./stories/WithIconLeft.story";
import { WithBothIcons as _WithBothIcons } from "./stories/WithBothIcons.story";
import { Disabled as _Disabled } from "./stories/Disabled.story";
import { TargetSelf as _TargetSelf } from "./stories/TargetSelf.story";

export const Default: Story = { ..._Default };
export const WithOnClick: Story = { ..._WithOnClick };
export const WithIconLeft: Story = { ..._WithIconLeft };
export const WithBothIcons: Story = { ..._WithBothIcons };
export const Disabled: Story = { ..._Disabled };
export const TargetSelf: Story = { ..._TargetSelf };

export default {
  ...SbDecorator({
    title: "Vanguard/Link",
    component: Link,
  }),
};
