import React from "react";
import { userEvent, within, expect } from "storybook/test";
import { Story } from "./_Input.default";
import { ValidationTestWrapper, getTestElements, expectErrorToContain, expectErrorToNotExist, inputAndBlur, clearAndInputAndBlur } from "../../shared/test-helpers";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";

const testUsernameValidation = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test invalid usernames
  await inputAndBlur(input, "ab");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  await clearAndInputAndBlur(input, "user@name");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  await clearAndInputAndBlur(input, "user name");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  // Test valid usernames
  await clearAndInputAndBlur(input, "username123");
  await expectErrorToNotExist(canvas);

  await clearAndInputAndBlur(input, "user_name");
  await expectErrorToNotExist(canvas);

  await clearAndInputAndBlur(input, "User-Name");
  await expectErrorToNotExist(canvas);
};

export const UsernameValidation: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ regex: /^[a-zA-Z0-9_-]{3,16}$/ }}
      label="Username Format"
      placeholder="username123, user_name, User-Name"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    await testUsernameValidation(canvasElement);
  },
};