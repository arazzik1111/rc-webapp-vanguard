import {
  clearAndInputAndBlur,
  expectErrorToContain,
  expectErrorToNotExist,
  getTestElements,
  inputAndBlur,
  ValidationTestWrapper,
} from "@vanguard/Input/stories";
import { Story } from "./_Input.default";
import { within, expect } from "storybook/test";
import { writeInInput } from "@test-utils/input-test-utils";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors.ts";

export const PasswordValidation: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ isPassword: true }}
      inputType="password"
      label="Password"
      placeholder="Enter password (4-100 characters)"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    const { canvas, input } = await getTestElements(canvasElement, "password");

    // Test short input shows error
    await inputAndBlur(input, "1");
    await expectErrorToContain(canvas, ErrorsKeys.PASSWORD_MIN_LEN);

    await inputAndBlur(input, "1".repeat(101));
    await expectErrorToContain(canvas, ErrorsKeys.PASSWORD_MAX_LEN);

    // Test valid length clears error
    await clearAndInputAndBlur(input, "12345");
    await expectErrorToNotExist(canvas);
  },
};
