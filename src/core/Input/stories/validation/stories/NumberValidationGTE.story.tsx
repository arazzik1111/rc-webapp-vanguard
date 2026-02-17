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

export const NumberValidationGTE: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ gte: 10 }}
      inputType="number"
      label="Number (≥ 10)"
      placeholder="Enter number greater than or equal to 10"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    const { canvas, input } = await getTestElements(canvasElement,'number');

    // Test short input shows error
    await inputAndBlur(input, "1");
    await expectErrorToContain(canvas, ErrorsKeys.NR_GTE);

    // Test valid length clears error
    await clearAndInputAndBlur(input, "10");
    await expectErrorToNotExist(canvas);
  },
};
