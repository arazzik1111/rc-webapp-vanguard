import React from "react";
import { userEvent, within, expect } from "storybook/test";
import { Story } from "./_Input.default";
import { ValidationTestWrapper, getTestElements, expectErrorToContain, expectErrorToNotExist, inputAndBlur, clearAndInputAndBlur } from "../../shared/test-helpers";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";

const testPasswordStrengthValidation = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement, "password");

  // Test weak passwords
  await inputAndBlur(input, "password");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  await clearAndInputAndBlur(input, "12345678");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  await clearAndInputAndBlur(input, "PASSWORD");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  // Test strong passwords
  await clearAndInputAndBlur(input, "Password123!", 50);
  await expectErrorToNotExist(canvas);

  await clearAndInputAndBlur(input, "MyP@ssw0rd2024", 50);
  await expectErrorToNotExist(canvas);
};

export const PasswordStrengthValidation: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ 
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ 
      }}
      inputType="password"
      label="Strong Password"
      placeholder="Must contain uppercase, lowercase, number, and special character"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    await testPasswordStrengthValidation(canvasElement);
  },
};