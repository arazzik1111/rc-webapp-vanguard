import { within, expect } from "storybook/test";
import { Story, baseArgs, selectors } from "./_BigLegendItem.default";
import { IconNames } from "@vanguard/Icon/IconNames";

export const WithAvatar: Story = {
  args: {
    ...baseArgs,
    showAvatar: true,
    avatar: IconNames.user,
    title: "User Engagement",
    description: "Active users on the platform",
    testId: "avatar-big-legend-item",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Test that title and description are updated
    await expect(canvas.getByText("User Engagement")).toBeInTheDocument();
    await expect(canvas.getByText("Active users on the platform")).toBeInTheDocument();

    // Test that avatar container exists - look for any Avatar component (could be icon, name, or image)
    const avatarElement = canvas.getByTestId(selectors.avatarPattern);
    await expect(avatarElement).toBeInTheDocument();
  },
};