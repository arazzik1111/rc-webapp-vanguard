import React from "react";
import { userEvent, within, expect } from "storybook/test";
import { Story } from "./_Input.default";
import { ValidationTestWrapper, getTestElements, expectErrorToContain, expectErrorToNotExist, inputAndBlur, clearAndInputAndBlur } from "../../shared/test-helpers";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";

const testMultiByteCharacterCounting = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test that multi-byte characters are counted correctly for length validation
  // 5 Chinese characters should be exactly 5 characters, not more
  await inputAndBlur(input, "测试文本内容");
  await expectErrorToNotExist(canvas);

  // Test exceeding max length with multi-byte characters
  await clearAndInputAndBlur(input, "这是一个非常长的中文文本内容测试");
  await expectErrorToContain(canvas, ErrorsKeys.MAX_LEN);
};

export const MultiByteCharacterCounting: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ minLength: 5, maxLength: 15 }}
      label="Multi-byte Character Counting"
      placeholder="测试文本长度计算"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    await testMultiByteCharacterCounting(canvasElement);
  },
};