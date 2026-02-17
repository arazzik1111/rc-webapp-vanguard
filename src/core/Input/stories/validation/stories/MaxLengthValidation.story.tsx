import { clearAndInputAndBlur, expectErrorToContain,
  expectErrorToNotExist, getTestElements, inputAndBlur, ValidationTestWrapper } from "@vanguard/Input/stories";
import { Story } from "./_Input.default";
import { within, expect } from "storybook/test";
import { writeInInput } from "@test-utils/input-test-utils";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors.ts";

export const MaxLengthValidation: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ maxLength: 10 }}
      label="Maximum 10 Characters"
      placeholder="Enter no more than 10 characters"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    const { canvas, input } = await getTestElements(canvasElement);

    // Test short input shows error
    await inputAndBlur(input, "ThisISSoLongItWillTriggerAnError");
    await expectErrorToContain(canvas, ErrorsKeys.MAX_LEN);

    // Test valid length clears error
    await clearAndInputAndBlur(input, "abcdef");
    await expectErrorToNotExist(canvas);
  },
};
