import React from "react";
import { userEvent, within, expect } from "storybook/test";
import { Story } from "./_Input.default";
import { ValidationTestWrapper, getTestElements, expectErrorToContain, expectErrorToNotExist, inputAndBlur, clearAndInputAndBlur } from "../../shared/test-helpers";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";

const testCreditCardValidation = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test invalid credit card formats
  await inputAndBlur(input, "1234");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  await clearAndInputAndBlur(input, "1234-5678-9012-3456");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  await clearAndInputAndBlur(input, "abcd efgh ijkl mnop");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  // Test valid credit card formats
  await clearAndInputAndBlur(input, "1234 5678 9012 3456");
  await expectErrorToNotExist(canvas);

  await clearAndInputAndBlur(input, "1234567890123456");
  await expectErrorToNotExist(canvas);
};

export const CreditCardValidation: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ regex: /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/ }}
      label="Credit Card Format"
      placeholder="1234 5678 9012 3456 or 1234567890123456"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    await testCreditCardValidation(canvasElement);
  },
};