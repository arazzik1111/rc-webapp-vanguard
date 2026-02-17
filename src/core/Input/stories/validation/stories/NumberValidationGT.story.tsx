import { expectErrorToNotExist, ValidationTestWrapper } from "@vanguard/Input/stories";
import { Story } from "./_Input.default";
import { expect } from "storybook/test";
import { getTestElements, inputAndBlur, clearAndInputAndBlur, expectErrorToContain } from "../../shared/test-helpers";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";

export const NumberValidationGT: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ gt: 10 }}
      inputType="number"
      label="Number (> 10)"
      placeholder="Enter number greater than 10"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    const { canvas, input } = await getTestElements(canvasElement,'number');

    // Test short input shows error
    await inputAndBlur(input, "10");
    await expectErrorToContain(canvas, ErrorsKeys.NR_GT);

    // Test valid length clears error
    await clearAndInputAndBlur(input, "11");
    await expectErrorToNotExist(canvas);
  },
};
