import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { RadioButton } from "./RadioButton";
import { Story } from "./stories/_RadioButton.default";
import { Default as _Default } from "./stories/Default.story";
import { Checked as _Checked } from "./stories/Checked.story";
import { BorderedTheme as _BorderedTheme } from "./stories/BorderedTheme.story";
import { SuccessTheme as _SuccessTheme } from "./stories/SuccessTheme.story";
import { Disabled as _Disabled } from "./stories/Disabled.story";
import { WithReplacements as _WithReplacements } from "./stories/WithReplacements.story";
import { WithChildren as _WithChildren } from "./stories/WithChildren.story";
import { InteractiveGroup as _InteractiveGroup } from "./stories/InteractiveGroup.story";

export default {
  ...SbDecorator({
    title: "Vanguard/RadioButton",
    component: RadioButton,
  }),
};

export const Default: Story = { ..._Default };
export const Checked: Story = { ..._Checked };
export const BorderedTheme: Story = { ..._BorderedTheme };
export const SuccessTheme: Story = { ..._SuccessTheme };
export const Disabled: Story = { ..._Disabled };
export const WithReplacements: Story = { ..._WithReplacements };
export const WithChildren: Story = { ..._WithChildren };
export const InteractiveGroup: Story = { ..._InteractiveGroup };