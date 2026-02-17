import { within, expect, userEvent } from "storybook/test";
import { Story, createMockOnClick } from "./_InputBase.default";

export const OnClickTest: Story = {
  args: {
    onClick: createMockOnClick(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();

    // Test onClick
    const clickElement = canvas.getAllByRole("textbox")[1];
    await user.click(clickElement);
    await expect(args.onClick).toHaveBeenCalled();
  },
};