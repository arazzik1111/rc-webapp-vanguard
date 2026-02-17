import {
  clearAndInputAndBlur,
  expectErrorToContain,
  expectErrorToNotExist,
  getTestElements,
  inputAndBlur,
  ValidationTestWrapper,
} from "@vanguard/Input/stories";
import { Story } from "./_Input.default";
import { within, expect } from "storybook/test";
import { writeInInput } from "@test-utils/input-test-utils";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors.ts";

export const NumberValidationLT: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ lt: 100 }}
      inputType="number"
      label="Number (< 100)"
      placeholder="Enter number less than 100"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    const { canvas, input } = await getTestElements(canvasElement,'number');

    // Test short input shows error
    await inputAndBlur(input, "100");
    await expectErrorToContain(canvas, ErrorsKeys.NR_LT);

    // Test valid length clears error
    await clearAndInputAndBlur(input, "99");
    await expectErrorToNotExist(canvas);
  },
};
