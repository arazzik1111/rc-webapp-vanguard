import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { baseStore } from "@stores/redux-base.store";
import { DatePicker } from "./DatePicker";
import { Story } from "./stories/_DatePicker.default";
import { Default as _Default } from "./stories/Default.story";
import { WithValue as _WithValue } from "./stories/WithValue.story";
import { WithLabel as _WithLabel } from "./stories/WithLabel.story";
import { Required as _Required } from "./stories/Required.story";
import { WithMinMaxDates as _WithMinMaxDates } from "./stories/WithMinMaxDates.story";
import { DisablePast as _DisablePast } from "./stories/DisablePast.story";
import { CloseOnClickAway as _CloseOnClickAway } from "./stories/CloseOnClickAway.story";
import { WithOnChange as _WithOnChange } from "./stories/WithOnChange.story";
import { DifferentLocales as _DifferentLocales } from "./stories/DifferentLocales.story";

export const Default: Story = { ..._Default };
export const WithValue: Story = { ..._WithValue };
export const WithLabel: Story = { ..._WithLabel };
export const Required: Story = { ..._Required };
export const WithMinMaxDates: Story = { ..._WithMinMaxDates };
export const DisablePast: Story = { ..._DisablePast };
export const CloseOnClickAway: Story = { ..._CloseOnClickAway };
export const WithOnChange: Story = { ..._WithOnChange };
export const DifferentLocales: Story = { ..._DifferentLocales };

export default {
  ...SbDecorator({
    title: "Vanguard/DatePicker",
    component: DatePicker,
    opts: {
      customStore: baseStore,
    },
  }),
};
