import { within, expect, userEvent } from "storybook/test";
import { Story, testTypes, createMockOnChange } from "./_InputBase.default";
import { getInputBaseElement } from "@vanguard/_internal/InputBase/stories/helpers/InputBase.test.helpers";

export const NumberTypeInteractionTest: Story = {
  args: {
    type: testTypes.number,
    onChange: createMockOnChange(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();

    // Use the helper function to get the number input
    const inputElement = getInputBaseElement(canvasElement, testTypes.number);

    // Test that we can interact with the number input
    await user.click(inputElement);
    await user.type(inputElement, "123");

    // Verify the onChange was called
    await expect(args.onChange).toHaveBeenCalled();

    // Verify the input has the correct value
    await expect(inputElement).toHaveValue(123);
  },
};