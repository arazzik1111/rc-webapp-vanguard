import React from "react";
import { userEvent, within, expect } from "storybook/test";
import { Story } from "./_Input.default";
import { ValidationTestWrapper, getTestElements, expectErrorToContain, expectErrorToNotExist, inputAndBlur, clearAndInputAndBlur } from "../../shared/test-helpers";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";

const testMacAddressValidation = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test invalid MAC addresses
  await inputAndBlur(input, "12:34:56:78:90");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  await clearAndInputAndBlur(input, "12-34-56-78-90-ZZ");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  await clearAndInputAndBlur(input, "1234.5678.90ab");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  // Test valid MAC addresses
  await clearAndInputAndBlur(input, "12:34:56:78:90:AB");
  await expectErrorToNotExist(canvas);

  await clearAndInputAndBlur(input, "12-34-56-78-90-ab");
  await expectErrorToNotExist(canvas);
};

export const MACAddressValidation: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ 
        regex: /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/ 
      }}
      label="MAC Address Format"
      placeholder="12:34:56:78:90:AB or 12-34-56-78-90-ab"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    await testMacAddressValidation(canvasElement);
  },
};