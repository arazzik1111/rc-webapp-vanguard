import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { Slider } from "@vanguard/Slider/Slider";
import { SLIDER_EXCLUDED_CONTROLS_DEFAULT, sliderArgTypes, Story } from "./stories/_Slider.default";
import { Default as _Default } from "./stories/Default.story";
import { WithMarks as _WithMarks } from "./stories/WithMarks.story";
import { Disabled as _Disabled } from "./stories/Disabled.story";
import { ValueLabelOn as _ValueLabelOn } from "./stories/ValueLabelOn.story";
import { AgeRange as _AgeRange } from "./stories/AgeRange.story";

export const Default: Story = { ..._Default };
export const WithMarks: Story = { ..._WithMarks };
export const Disabled: Story = { ..._Disabled };
export const ValueLabelOn: Story = { ..._ValueLabelOn };
export const AgeRange: Story = { ..._AgeRange };

export default {
  ...SbDecorator({
    title: "Vanguard/Slider",
    component: Slider,
    extra: {
      argTypes: {
        ...disableControls(SLIDER_EXCLUDED_CONTROLS_DEFAULT),
        ...sliderArgTypes,
      },
    },
  }),
};

