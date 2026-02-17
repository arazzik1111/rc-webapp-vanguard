import { within, expect, userEvent } from "storybook/test";
import { Story, createMockOnInput } from "./_InputBase.default";

export const OnInputTest: Story = {
  args: {
    onInput: createMockOnInput(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Find the input element
    const inputElement = canvas.getAllByRole("textbox")[1];

    const user = userEvent.setup();

    await user.click(inputElement);

    await user.keyboard("New input value");

    // Assert that the onInput function was called
    await expect(args.onInput).toHaveBeenCalled();
  },
};