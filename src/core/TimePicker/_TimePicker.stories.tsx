import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { TimePicker } from "./TimePicker";
import { Story } from "./stories/_TimePicker.default";
import { DefaultSelected as _DefaultSelected } from "./stories/DefaultSelected.story";
import { DefaultSelectedWrongValue as _DefaultSelectedWrongValue } from "./stories/DefaultSelectedWrongValue.story";
import { DefaultSelectedFreeSolo as _DefaultSelectedFreeSolo } from "./stories/DefaultSelectedFreeSolo.story";
import { SelectAValueFromPicker as _SelectAValueFromPicker } from "./stories/SelectAValueFromPicker.story";
import { SelectAValueFromPickerFreeSolo as _SelectAValueFromPickerFreeSolo } from "./stories/SelectAValueFromPickerFreeSolo.story";

export const DefaultSelected: Story = { ..._DefaultSelected };
export const DefaultSelectedWrongValue: Story = { ..._DefaultSelectedWrongValue };
export const DefaultSelectedFreeSolo: Story = { ..._DefaultSelectedFreeSolo };
export const SelectAValueFromPicker: Story = { ..._SelectAValueFromPicker };
export const SelectAValueFromPickerFreeSolo: Story = { ..._SelectAValueFromPickerFreeSolo };

export default {
  ...SbDecorator({
    title: "Vanguard/TimePicker",
    component: TimePicker,
    opts: {
      withRedux: true,
    },
    extra: {
      argTypes: {
        hourListType: {
          defaultValue: "half",
        },
        label: {
          defaultValue: "Start time",
        },
      },
    },
  }),
};
