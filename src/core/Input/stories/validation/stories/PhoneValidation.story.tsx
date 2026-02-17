import { clearAndInputAndBlur, expectErrorToContain,
  expectErrorToNotExist, getTestElements, inputAndBlur, ValidationTestWrapper } from "@vanguard/Input/stories";
import { Story } from "./_Input.default";
import { within, expect } from "storybook/test";
import { writeInInput } from "@test-utils/input-test-utils";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors.ts";

export const PhoneValidation: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ validatePhone: true }}
      label="Phone Number"
      placeholder="Enter a valid phone number"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    const { canvas, input } = await getTestElements(canvasElement);

    // Test short input shows error
    await inputAndBlur(input, "asd123");
    await expectErrorToContain(canvas, ErrorsKeys.INVALID_PHONE);

    // Test valid length clears error
    await clearAndInputAndBlur(input, "123");
    await expectErrorToNotExist(canvas);
  }
};
