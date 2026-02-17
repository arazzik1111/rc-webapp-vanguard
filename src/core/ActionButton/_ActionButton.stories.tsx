
import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { ActionButton } from "./ActionButton";
import { Story } from "./stories/_ActionButton.default";
import { Default as _Default } from "./stories/Default.story";
import { WithText as _WithText } from "./stories/WithText.story";
import { WithCustomIcon as _WithCustomIcon } from "./stories/WithCustomIcon.story";
import { Disabled as _Disabled } from "./stories/Disabled.story";

export const Default: Story = { ..._Default };
export const WithText: Story = { ..._WithText };
export const WithCustomIcon: Story = { ..._WithCustomIcon };
export const Disabled: Story = { ..._Disabled };

export default {
  ...SbDecorator({
    title: "Vanguard/ActionButton",
    component: ActionButton,
  }),
};
