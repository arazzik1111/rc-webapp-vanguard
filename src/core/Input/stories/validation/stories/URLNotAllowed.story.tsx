import { ValidationTestWrapper } from "@vanguard/Input/stories";
import { Story } from "./_Input.default";
import { expect } from "storybook/test";
import { getTestElements, inputAndBlur, clearAndInputAndBlur, expectErrorToContain } from "../../shared/test-helpers";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";

export const URLNotAllowed: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ urlNotAllowed: true }}
      label="No URLs Allowed"
      placeholder="URLs are not permitted"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    const { canvas, input } = await getTestElements(canvasElement);

    // Test URL shows error
    await inputAndBlur(input, "Visit https://example.com");
    await expectErrorToContain(canvas, ErrorsKeys.URL_NOT_ALLOWED);

    // Test valid text clears error
    await clearAndInputAndBlur(input, "Visit our website");
    // ensure no error remains
    await expect(canvas.queryByTestId("vanguard-input-error-text")).toBeNull();
  },
};
