import { within, expect, userEvent } from "storybook/test";
import { Story, testTypes, createMockOnChange } from "./_InputBase.default";
import { getInputBaseElement } from "@vanguard/_internal/InputBase/stories/helpers/InputBase.test.helpers";

export const PasswordTypeInteractionTest: Story = {
  args: {
    type: testTypes.password,
    onChange: createMockOnChange(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();

    // Use the helper function to get the password input
    const inputElement = getInputBaseElement(canvasElement, testTypes.password);

    // Test that we can interact with the password input
    await user.click(inputElement);
    await user.type(inputElement, "testpassword");

    // Verify the onChange was called
    await expect(args.onChange).toHaveBeenCalled();

    // Verify the input has the correct value
    await expect(inputElement).toHaveValue("testpassword");
  },
};