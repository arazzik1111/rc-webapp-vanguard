import { within, expect, userEvent } from "storybook/test";
import { Story, createMockOnHelperLinkClick } from "./_InputBase.default";

export const HelperLinkTest: Story = {
  args: {
    helperLinkText: "Helper Link",
    onHelperLinkClick: createMockOnHelperLinkClick(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();

    // Find the helper link
    const helperLink = canvas.getByText("Helper Link");
    await expect(helperLink).toBeInTheDocument();

    // Click the helper link
    await user.click(helperLink);

    // Verify the click handler was called
    await expect(args.onHelperLinkClick).toHaveBeenCalled();
  },
};