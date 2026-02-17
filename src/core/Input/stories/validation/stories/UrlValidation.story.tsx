import React from "react";
import { Story } from "./_Input.default";
import { ValidationTestWrapper, getTestElements, expectErrorToContain, expectErrorToNotExist, triggerValidation, inputAndBlur } from "../../shared/test-helpers";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";

const testUrlValidation = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement, "url");

  // Test empty url shows required error
  await triggerValidation(input);
  await expectErrorToContain(canvas, ErrorsKeys.REQUIRED);

  // Test valid url clears error
  await inputAndBlur(input, "https://example.com");
  await expectErrorToNotExist(canvas);
};

export const UrlValidation: Story = {
  render: (args) => (
    <ValidationTestWrapper
      inputType="url"
      validationConfig={{ required: true }}
      label="URL Input"
      placeholder="Enter URL"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    await testUrlValidation(canvasElement);
  },
};