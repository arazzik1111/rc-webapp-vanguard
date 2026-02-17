import React from "react";
import { Story } from "./_Input.default";
import { ValidationTestWrapper, getTestElements, expectErrorToContain, expectErrorToNotExist, triggerValidation, inputAndBlur } from "../../shared/test-helpers";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";

const testTelValidation = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement, "tel");

  // Test empty tel shows required error
  await triggerValidation(input);
  await expectErrorToContain(canvas, ErrorsKeys.REQUIRED);

  // Test tel with content clears error
  await inputAndBlur(input, "+1234567890");
  await expectErrorToNotExist(canvas);
};

export const TelValidation: Story = {
  render: (args) => (
    <ValidationTestWrapper
      inputType="tel"
      validationConfig={{ required: true }}
      label="Telephone Input"
      placeholder="Enter phone number"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    await testTelValidation(canvasElement);
  },
};