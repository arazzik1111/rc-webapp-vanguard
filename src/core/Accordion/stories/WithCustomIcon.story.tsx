import { within, userEvent, expect } from "storybook/test";
import { Story, defaultProps, DETAILS_TEXT } from "./_Accordion.default";
import { IconSize } from "../../Icon/Icon";
import { IconNames } from "../../Icon/IconNames";

export const WithCustomIcon: Story = {
  args: {
    ...defaultProps,
    iconSize: IconSize.small,
    iconName: IconNames.arrowDown,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const action = canvas.getByRole("button");

    // 👇 Test that accordion works with custom icon
    await userEvent.click(action);

    // 👇 Assert functionality works with custom icon
    await expect(canvas.getByText(DETAILS_TEXT)).toBeVisible();
  },
};