import { ValidationTestWrapper } from "@vanguard/Input/stories";
import { Story } from "./_Input.default";
import { within, expect } from "storybook/test";
import { writeInInput } from "@test-utils/input-test-utils";
import { getErrorDisplayAfterError, getTestElements, inputAndBlur, expectErrorToNotExist, triggerBlurValidation } from "@vanguard/Input/stories/shared/test-helpers";

export const RequiredValidation: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ required: true }}
      label="Required Field"
      placeholder="This field is required"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    const { canvas, input } = await getTestElements(canvasElement);
    
    // Trigger validation without entering value to trigger required validation
    await triggerBlurValidation(input);
    
    // Wait for validation and check for error message using test ID
    const error = await getErrorDisplayAfterError(canvasElement);
    await expect(error).toBeTruthy();
    await expect(error.textContent).toMatch(/required/i);
    
    // Enter a value using the helper function
    await inputAndBlur(input, 'Some value');
    
    // Check error is gone
    await expectErrorToNotExist(canvas);
  },
};
