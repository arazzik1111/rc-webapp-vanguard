import React from "react";
import { userEvent, within, expect } from "storybook/test";
import { Story } from "./_Input.default";
import { ValidationTestWrapper, getTestElements, expectErrorToContain, expectErrorToNotExist, inputAndBlur, clearAndInputAndBlur } from "../../shared/test-helpers";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";

const testEmojiValidation = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test emoji-only input
  await inputAndBlur(input, "😀😃😄😁😆");
  await expectErrorToNotExist(canvas);

  // Test mixed emoji and text
  await clearAndInputAndBlur(input, "Hello 👋 World 🌍");
  await expectErrorToNotExist(canvas);

  // Test complex emoji (multi-codepoint)
  await clearAndInputAndBlur(input, "👨‍👩‍👧‍👦🏳️‍🌈");
  await expectErrorToNotExist(canvas);
};

export const EmojiValidation: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ minLength: 2, maxLength: 20 }}
      label="Emoji Support"
      placeholder="😀🌍👨‍👩‍👧‍👦"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    await testEmojiValidation(canvasElement);
  },
};