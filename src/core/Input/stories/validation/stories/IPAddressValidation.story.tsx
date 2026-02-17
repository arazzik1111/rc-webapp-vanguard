import React from "react";
import { userEvent, within, expect } from "storybook/test";
import { Story } from "./_Input.default";
import { ValidationTestWrapper, getTestElements, expectErrorToContain, expectErrorToNotExist, inputAndBlur, clearAndInputAndBlur } from "../../shared/test-helpers";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";

const testIPAddressValidation = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test invalid IP addresses
  await inputAndBlur(input, "256.1.1.1");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  await clearAndInputAndBlur(input, "192.168.1");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  await clearAndInputAndBlur(input, "192.168.1.1.1");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  // Test valid IP addresses
  await clearAndInputAndBlur(input, "192.168.1.1");
  await expectErrorToNotExist(canvas);

  await clearAndInputAndBlur(input, "10.0.0.1");
  await expectErrorToNotExist(canvas);
};

export const IPAddressValidation: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ 
        regex: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/ 
      }}
      label="IP Address Format"
      placeholder="192.168.1.1"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    await testIPAddressValidation(canvasElement);
  },
};