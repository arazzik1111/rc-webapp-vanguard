import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { CheckBox } from "../CheckBox";
import { Story } from "./_CheckBox.default";
import { checkBoxStore } from "./bootstrap/CheckBox.slice";
import { Default as _Default } from "./Default.story";
import { Checked as _Checked } from "./Checked.story";
import { Disabled as _Disabled } from "./Disabled.story";
import { Intermediate as _Intermediate } from "./Intermediate.story";
import { WithBackgroundColor as _WithBackgroundColor } from "./WithBackgroundColor.story";
import { SmallSize as _SmallSize } from "./SmallSize.story";
import { HoverModeCheck as _HoverModeCheck } from "./HoverModeCheck.story";
import { WithOnChange as _WithOnChange } from "./WithOnChange.story";
import { WithFormConfig as _WithFormConfig } from "./WithFormConfig.story";
import { WithClassName as _WithClassName } from "./WithClassName.story";
import { WithTestId as _WithTestId } from "./WithTestId.story";
import { WithTranslate as _WithTranslate } from "./WithTranslate.story";
import { WithReplacements as _WithReplacements } from "./WithReplacements.story";
import { WithLabelWordBreak as _WithLabelWordBreak } from "./WithLabelWordBreak.story";
import { WithHovered as _WithHovered } from "./WithHovered.story";

export const Default: Story = { ..._Default };
export const Checked: Story = { ..._Checked };
export const Disabled: Story = { ..._Disabled };
export const Intermediate: Story = { ..._Intermediate };
export const WithBackgroundColor: Story = { ..._WithBackgroundColor };
export const SmallSize: Story = { ..._SmallSize };
export const HoverModeCheck: Story = { ..._HoverModeCheck };
export const WithOnChange: Story = { ..._WithOnChange };
export const WithFormConfig: Story = { ..._WithFormConfig };
export const WithClassName: Story = { ..._WithClassName };
export const WithTestId: Story = { ..._WithTestId };
export const WithTranslate: Story = { ..._WithTranslate };
export const WithReplacements: Story = { ..._WithReplacements };
export const WithLabelWordBreak: Story = { ..._WithLabelWordBreak };
export const WithHovered: Story = { ..._WithHovered };

export default {
  ...SbDecorator({
    title: "Vanguard/CheckBox",
    component: CheckBox,
    opts: {
      customStore: checkBoxStore,
    },
  }),
};
