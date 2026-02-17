import { within, expect, userEvent } from "storybook/test";
import { Story, createMockOnChange } from "./_InputBase.default";

export const OnChangeTest: Story = {
  args: {
    onChange: createMockOnChange(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();

    // Test onChange
    const inputElement = canvas.getAllByRole("textbox")[1];
    await user.click(inputElement);

    await user.keyboard("New input value");

    await expect(args.onChange).toHaveBeenCalled();
  },
};