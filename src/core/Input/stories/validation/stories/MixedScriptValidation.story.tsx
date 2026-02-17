import React from "react";
import { userEvent, within, expect } from "storybook/test";
import { Story } from "./_Input.default";
import { ValidationTestWrapper, getTestElements, expectErrorToContain, expectErrorToNotExist, inputAndBlur, clearAndInputAndBlur } from "../../shared/test-helpers";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";

const testMixedScriptValidation = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test mixed scripts (Latin + CJK + Arabic)
  await inputAndBlur(input, "Hello 你好 مرحبا");
  await expectErrorToNotExist(canvas);

  // Test mixed scripts with special characters
  await clearAndInputAndBlur(input, "Test-测试-テスト");
  await expectErrorToNotExist(canvas);
};

export const MixedScriptValidation: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ minLength: 5, maxLength: 50 }}
      label="Mixed Scripts"
      placeholder="Hello 你好 مرحبا"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    await testMixedScriptValidation(canvasElement);
  },
};