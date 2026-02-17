import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { baseStore } from "@stores/redux-base.store";
import { DateRangeInput } from "./DateRangeInput";
import { Story } from "./stories/_DateRangeInput.default";
import { Default as _Default } from "./stories/Default.story";
import { WithLabel as _WithLabel } from "./stories/WithLabel.story";
import { Disabled as _Disabled } from "./stories/Disabled.story";
import { WithInitialValue as _WithInitialValue } from "./stories/WithInitialValue.story";
import { WithInputFormatter as _WithInputFormatter } from "./stories/WithInputFormatter.story";
import { WithDatePickerProps as _WithDatePickerProps } from "./stories/WithDatePickerProps.story";

export const Default: Story = { ..._Default };
export const WithLabel: Story = { ..._WithLabel };
export const Disabled: Story = { ..._Disabled };
export const WithInitialValue: Story = { ..._WithInitialValue };
export const WithInputFormatter: Story = { ..._WithInputFormatter };
export const WithDatePickerProps: Story = { ..._WithDatePickerProps };

export default {
  ...SbDecorator({
    title: "Vanguard/DateRangeInput",
    component: DateRangeInput,
    opts: {
      customStore: baseStore,
    },
  }),
};