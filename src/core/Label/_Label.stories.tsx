import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { Label } from "./Label";
import { Story } from "./stories/_Label.default";
import { Default as _Default } from "./stories/Default.story";
import { WithReplacements as _WithReplacements } from "./stories/WithReplacements.story";
import { NormalWeight as _NormalWeight } from "./stories/NormalWeight.story";
import { BoldWeight as _BoldWeight } from "./stories/BoldWeight.story";
import { MediumWeight as _MediumWeight } from "./stories/MediumWeight.story";
import { UndefinedValue as _UndefinedValue } from "./stories/UndefinedValue.story";
import { AllProps as _AllProps } from "./stories/AllProps.story";

export default {
  ...SbDecorator({
    title: "Vanguard/Label",
    component: Label,
    extra: {
      args: {
        value: "Default Label",
      },
    },
  }),
};

export const Default: Story = { ..._Default };
export const WithReplacements: Story = { ..._WithReplacements };
export const NormalWeight: Story = { ..._NormalWeight };
export const BoldWeight: Story = { ..._BoldWeight };
export const MediumWeight: Story = { ..._MediumWeight };
export const UndefinedValue: Story = { ..._UndefinedValue };
export const AllProps: Story = { ..._AllProps };