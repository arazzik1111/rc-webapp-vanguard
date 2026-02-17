import React from "react";
import { userEvent, within, expect } from "storybook/test";
import { Story } from "./_Input.default";
import { ValidationTestWrapper, getTestElements, expectErrorToContain, expectErrorToNotExist, inputAndBlur, clearAndInputAndBlur } from "../../shared/test-helpers";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";

const testRightToLeftLanguages = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test RTL languages (Arabic, Hebrew)
  await inputAndBlur(input, "مرحبا بكم في اختبار النص العربي");
  await expectErrorToNotExist(canvas);

  await clearAndInputAndBlur(input, "שלום וברוכים הבאים לבדיקת הטקסט בעברית");
  await expectErrorToNotExist(canvas);
};

export const RightToLeftLanguages: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ minLength: 5, maxLength: 100 }}
      label="RTL Languages Support"
      placeholder="مرحبا, שלום"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    await testRightToLeftLanguages(canvasElement);
  },
};