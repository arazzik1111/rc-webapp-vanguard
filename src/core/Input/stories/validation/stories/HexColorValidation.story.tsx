import React from "react";
import { userEvent, within, expect } from "storybook/test";
import { Story } from "./_Input.default";
import { ValidationTestWrapper, getTestElements, expectErrorToContain, expectErrorToNotExist, inputAndBlur, clearAndInputAndBlur } from "../../shared/test-helpers";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";

const testHexColorValidation = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test invalid hex colors
  await inputAndBlur(input, "#12345");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  await clearAndInputAndBlur(input, "123456");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  await clearAndInputAndBlur(input, "#GGGGGG");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  // Test valid hex colors
  await clearAndInputAndBlur(input, "#123456");
  await expectErrorToNotExist(canvas);

  await clearAndInputAndBlur(input, "#ABC");
  await expectErrorToNotExist(canvas);

  await clearAndInputAndBlur(input, "#abcdef");
  await expectErrorToNotExist(canvas);
};

export const HexColorValidation: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ regex: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/ }}
      label="Hex Color Format"
      placeholder="#123456 or #ABC"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    await testHexColorValidation(canvasElement);
  },
};