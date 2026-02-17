import React from "react";
import { userEvent, within, expect } from "storybook/test";
import { Story } from "./_Input.default";
import { ValidationTestWrapper, getTestElements, expectErrorToContain, expectErrorToNotExist, inputAndBlur, clearAndInputAndBlur } from "../../shared/test-helpers";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";

const testUnicodeValidation = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test short unicode text shows error
  await inputAndBlur(input, "中");
  await expectErrorToContain(canvas, ErrorsKeys.MIN_LEN);

  // Test valid unicode text clears error
  await clearAndInputAndBlur(input, "中文测试");
  await expectErrorToNotExist(canvas);

  // Test Arabic text
  await clearAndInputAndBlur(input, "العربية");
  await expectErrorToNotExist(canvas);

  // Test emojis
  await clearAndInputAndBlur(input, "🌟🚀💫");
  await expectErrorToNotExist(canvas);
};

export const UnicodeValidation: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ minLength: 2, maxLength: 20 }}
      label="Unicode Support"
      placeholder="Enter unicode: 中文, العربية, 🌟"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    await testUnicodeValidation(canvasElement);
  },
};