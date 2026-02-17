import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { colorPickerStore } from "./stories/bootstrap/colorpicker.test.slice";
import { ColorPicker } from "@vanguard/ColorPicker/ColorPicker.tsx";
import { Story } from "./stories/_ColorPicker.default";
import { Default as _Default } from "./stories/Default.story";
import { WithCallback as _WithCallback } from "./stories/WithCallback.story";
import { WithReplacements as _WithReplacements } from "./stories/WithReplacements.story";
import { NoInitialColor as _NoInitialColor } from "./stories/NoInitialColor.story";
import { InteractiveDemo as _InteractiveDemo } from "./stories/InteractiveDemo.story";
import { ComprehensiveTests as _ComprehensiveTests } from "./stories/ComprehensiveTests.story";
import { StateManagementTests as _StateManagementTests } from "./stories/StateManagementTests.story";
import { HexValidationTests as _HexValidationTests } from "./stories/HexValidationTests.story";
import { ErrorHandlingTests as _ErrorHandlingTests } from "./stories/ErrorHandlingTests.story";
import { WhiteColorTest as _WhiteColorTest } from "./stories/WhiteColorTest.story";
// import { FormConfigValidation as _FormConfigValidation } from "./stories/FormConfigValidation.story";
import { AutoValidation as _AutoValidation } from "./stories/AutoValidation.story";
import { ValidationTest as _ValidationTest } from "./stories/ValidationTest.story";
import { MaxWidthPx as _MaxWidthPx, MaxWidthPercent as _MaxWidthPercent, MaxWidthDefault as _MaxWidthDefault } from "./stories/MaxWidth.story";
import { ColorPickerInputTests as _ColorPickerInputTests } from "./stories/ColorPickerInputTests.story";

export const Default: Story = { ..._Default };
export const WithCallback: Story = { ..._WithCallback };
export const WithReplacements: Story = { ..._WithReplacements };
export const NoInitialColor: Story = { ..._NoInitialColor };
export const InteractiveDemo: Story = { ..._InteractiveDemo };
export const ComprehensiveTests: Story = { ..._ComprehensiveTests };
export const StateManagementTests: Story = { ..._StateManagementTests };
export const HexValidationTests: Story = { ..._HexValidationTests };
export const ErrorHandlingTests: Story = { ..._ErrorHandlingTests };
export const WhiteColorTest: Story = { ..._WhiteColorTest };
export const AutoValidation: Story = { ..._AutoValidation };
export const ValidationTest: Story = { ..._ValidationTest };
export const MaxWidthPx: Story = { ..._MaxWidthPx };
export const MaxWidthPercent: Story = { ..._MaxWidthPercent };
export const MaxWidthDefault: Story = { ..._MaxWidthDefault };
export const ColorPickerInputTests: Story = { ..._ColorPickerInputTests };

export default {
  ...SbDecorator({
    title: "Vanguard/ColorPicker",
    component: ColorPicker,
    extra: {
      argTypes: {
        ...disableControls(["formconfig",'onColorChange']),
      },
    },
    opts: {
      customStore: colorPickerStore,
    },
  }),
};
