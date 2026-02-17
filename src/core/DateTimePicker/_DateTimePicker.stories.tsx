import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { baseStore } from "@stores/redux-base.store";
import { DateTimePicker } from "./DateTimePicker";
import { Story } from "./stories/_DateTimePicker.default";
import { Default as _Default } from "./stories/Default.story";
import { WithDateAndTime as _WithDateAndTime } from "./stories/WithDateAndTime.story";
import { WithLabels as _WithLabels } from "./stories/WithLabels.story";
import { WithMinMax as _WithMinMax } from "./stories/WithMinMax.story";
import { DisablePast as _DisablePast } from "./stories/DisablePast.story";

export const Default: Story = { ..._Default };
export const WithDateAndTime: Story = { ..._WithDateAndTime };
export const WithLabels: Story = { ..._WithLabels };
export const WithMinMax: Story = { ..._WithMinMax };
export const DisablePast: Story = { ..._DisablePast };

export default {
  ...SbDecorator({
    title: "Vanguard/DateTimePicker",
    component: DateTimePicker,
    opts: {
      customStore: baseStore,
    },
  }),
};
