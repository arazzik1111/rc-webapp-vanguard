import {
  clearAndInputAndBlur,
  expectErrorToContain,
  expectErrorToNotExist,
  getTestElements,
  inputAndBlur,
  ValidationTestWrapper,
} from "@vanguard/Input/stories";
import { Story } from "./_Input.default";
import { testMinLengthValidation } from "../helpers/validation-helpers";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors.ts";

export const MinLengthValidation: Story = {
  render: (args) => (
    <ValidationTestWrapper
      {...args}
      validationConfig={{ minLength: 5 }}
      label="Minimum 5 Characters"
      placeholder="Enter at least 5 characters"
      testId="validation-input"
    />
  ),
  play: async ({ canvasElement }) => {
    const { canvas, input } = await getTestElements(canvasElement);

    // Test short input shows error
    await inputAndBlur(input, "abc");
    await expectErrorToContain(canvas, ErrorsKeys.MIN_LEN);

    // Test valid length clears error
    await clearAndInputAndBlur(input, "abcdef");
    await expectErrorToNotExist(canvas);
  },
};
