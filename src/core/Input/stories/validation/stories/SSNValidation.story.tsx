import React from "react";
import { userEvent, within, expect } from "storybook/test";
import { Story } from "./_Input.default";
import { ValidationTestWrapper, getTestElements, expectErrorToContain, expectErrorToNotExist, inputAndBlur, clearAndInputAndBlur } from "../../shared/test-helpers";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";

const testSSNValidation = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test invalid SSN formats
  await inputAndBlur(input, "123456789");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  await clearAndInputAndBlur(input, "123-45-67890");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  await clearAndInputAndBlur(input, "abc-de-fghi");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  // Test valid SSN format
  await clearAndInputAndBlur(input, "123-45-6789");
  await expectErrorToNotExist(canvas);
};

export const SSNValidation: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ regex: /^\d{3}-\d{2}-\d{4}$/ }}
      label="SSN Format"
      placeholder="123-45-6789"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    await testSSNValidation(canvasElement);
  },
};