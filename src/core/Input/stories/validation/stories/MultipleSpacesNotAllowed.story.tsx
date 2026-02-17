import { ValidationTestWrapper } from "@vanguard/Input/stories";
import { Story } from "./_Input.default";
import { expect } from "storybook/test";
import { getTestElements, inputAndBlur, clearAndInputAndBlur, expectErrorToContain } from "../../shared/test-helpers";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";

export const MultipleSpacesNotAllowed: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ multipleSpacesNotAllowed: true }}
      label="No Multiple Spaces"
      placeholder="Multiple spaces not allowed"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    const { canvas, input } = await getTestElements(canvasElement);

    // Test multiple spaces show error
    await inputAndBlur(input, "test  value");
    await expectErrorToContain(canvas, ErrorsKeys.MULTIPLE_SPACES_NOT_ALLOWED);

    // Test single spaces clear error
    await clearAndInputAndBlur(input, "test value");
    // ensure no error remains
    await expect(canvas.queryByTestId("vanguard-input-error-text")).toBeNull();
  },
};
