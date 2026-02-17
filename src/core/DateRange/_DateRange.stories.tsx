import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { DateRange } from "./DateRange";
import { Story } from "./stories/_DateRange.default";
import { Default as _Default } from "./stories/Default.story";
import { WithInitialValue as _WithInitialValue } from "./stories/WithInitialValue.story";
import { CalendarViewOnly as _CalendarViewOnly } from "./stories/CalendarViewOnly.story";
import { PredefinedViewOnly as _PredefinedViewOnly } from "./stories/PredefinedViewOnly.story";
import { WithMomentDates as _WithMomentDates } from "./stories/WithMomentDates.story";
import { InteractiveDemo as _InteractiveDemo } from "./stories/InteractiveDemo.story";

export const Default: Story = { ..._Default };
export const WithInitialValue: Story = { ..._WithInitialValue };
export const CalendarViewOnly: Story = { ..._CalendarViewOnly };
export const PredefinedViewOnly: Story = { ..._PredefinedViewOnly };
export const WithMomentDates: Story = { ..._WithMomentDates };
export const InteractiveDemo: Story = { ..._InteractiveDemo };

export default {
  ...SbDecorator({
    title: "Vanguard/DateRange",
    component: DateRange,
    extra: {
      args: {
        view: "all",
      },
    },
  }),
};