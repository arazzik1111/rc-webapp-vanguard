import { clearAndInputAndBlur, expectErrorToContain,
  expectErrorToNotExist, getTestElements, inputAndBlur, ValidationTestWrapper } from "@vanguard/Input/stories";
import { Story } from "./_Input.default";
import { within, expect } from "storybook/test";

import { writeInInput } from "@test-utils/input-test-utils";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors.ts";

export const RegexValidation: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ regex: /^[A-Z][a-z]+$/ }}
      label="Capitalized Word Only"
      placeholder="Enter a capitalized word (e.g., Hello)"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    const { canvas, input } = await getTestElements(canvasElement);

    // Test invalid input (lowercase) shows regex error
    await inputAndBlur(input, "hello");
    await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

    // Test invalid input (all caps) shows regex error
    await clearAndInputAndBlur(input, "HELLO");
    await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

    // Test invalid input (numbers) shows regex error
    await clearAndInputAndBlur(input, "123");
    await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

    // Test valid input (capitalized word) clears error
    await clearAndInputAndBlur(input, "Hello");
    await expectErrorToNotExist(canvas);

    // Test another valid input
    await clearAndInputAndBlur(input, "World");
    await expectErrorToNotExist(canvas);
  },
};
