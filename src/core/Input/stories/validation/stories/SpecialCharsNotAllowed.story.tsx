import { ValidationTestWrapper } from "@vanguard/Input/stories";
import { Story } from "./_Input.default";
import { expect } from "storybook/test";
import { getTestElements, inputAndBlur, clearAndInputAndBlur, expectErrorToContain } from "../../shared/test-helpers";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";

export const SpecialCharsNotAllowed: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ specialCharsNotAllowed: true }}
      label="No Special Characters"
      placeholder="Special characters not allowed"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    const { canvas, input } = await getTestElements(canvasElement);

    // Test special characters show error
    await inputAndBlur(input, "test#value");
    await expectErrorToContain(canvas, ErrorsKeys.SPECIAL_CHARS_NOT_ALLOWED);

    // Test valid text clears error
    await clearAndInputAndBlur(input, "test value");
    // ensure no error remains
    await expect(canvas.queryByTestId("vanguard-input-error-text")).toBeNull();
  },
};
