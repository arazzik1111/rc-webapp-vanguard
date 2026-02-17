import React from "react";
import { userEvent, within, expect } from "storybook/test";
import { Story } from "./_Input.default";
import { ValidationTestWrapper, getTestElements, expectErrorToContain, expectErrorToNotExist, inputAndBlur, clearAndInputAndBlur } from "../../shared/test-helpers";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";

const testZipCodeValidation = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test invalid zip codes
  await inputAndBlur(input, "1234");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  await clearAndInputAndBlur(input, "12345-123");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  await clearAndInputAndBlur(input, "abcde");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  // Test valid zip codes
  await clearAndInputAndBlur(input, "12345");
  await expectErrorToNotExist(canvas);

  await clearAndInputAndBlur(input, "12345-6789");
  await expectErrorToNotExist(canvas);
};

export const ZipCodeValidation: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ regex: /^\d{5}(-\d{4})?$/ }}
      label="ZIP Code Format"
      placeholder="12345 or 12345-6789"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    await testZipCodeValidation(canvasElement);
  },
};