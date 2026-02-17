import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { LineAlert } from "./LineAlert";
import { Story } from "./stories/_LineAlert.default";
import { Default as _Default } from "./stories/Default.story";
import { Danger as _Danger } from "./stories/Danger.story";
import { Warning as _Warning } from "./stories/Warning.story";
import { Success as _Success } from "./stories/Success.story";

export const Default: Story = { ..._Default };
export const Danger: Story = { ..._Danger };
export const Warning: Story = { ..._Warning };
export const Success: Story = { ..._Success };

export default {
  ...SbDecorator({
    title: "Vanguard/LineAlert",
    component: LineAlert,
  }),
};
