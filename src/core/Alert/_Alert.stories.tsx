import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { Alert } from "./Alert";
import { Story } from "./stories/_Alert.default";
import { Default as _Default } from "./stories/Default.story";
import { Danger as _Danger } from "./stories/Danger.story";
import { Warn as _Warn } from "./stories/Warn.story";
import { Success as _Success } from "./stories/Success.story";

export const Default: Story = { ..._Default };
export const Danger: Story = { ..._Danger };
export const Warn: Story = { ..._Warn };
export const Success: Story = { ..._Success };

export default {
  ...SbDecorator({
    title: "Vanguard/Alert",
    component: Alert,
  }),
};