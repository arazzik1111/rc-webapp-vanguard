import React from "react";
import { within, expect, userEvent } from "storybook/test";
import { Story, InteractiveTabsDemo } from "./_Tab.default";

export const TabsWithIcons: Story = {
  render: () => (
    <InteractiveTabsDemo
      tabs={[
        {
          label: "Google",
          tabIcons: ["google"],
          component: (
            <div style={{ padding: "24px", textAlign: "center" }}>
              <h3>Google Integration</h3>
              <p>Manage your Google business listings and reviews.</p>
            </div>
          ),
          value: 0,
        },
        {
          label: "Bing",
          tabIcons: ["bing"],
          component: (
            <div style={{ padding: "24px", textAlign: "center" }}>
              <h3>Bing Integration</h3>
              <p>Connect with Bing Places for Business.</p>
            </div>
          ),
          value: 1,
        },
        {
          label: "Apple Maps",
          tabIcons: ["apple-maps"],
          component: (
            <div style={{ padding: "24px", textAlign: "center" }}>
              <h3>Apple Maps Integration</h3>
              <p>Manage your Apple Maps business information.</p>
            </div>
          ),
          value: 2,
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tabElements = canvas.getAllByRole("tab");
    await expect(tabElements).toHaveLength(3);

    // Test that icons are present (avatars should be rendered)
    const avatars = canvas.getAllByTestId("avatar-name-test-id");
    await expect(avatars.length).toBeGreaterThan(0);

    // Test tab interaction with icons
    await userEvent.click(tabElements[2]);
    await expect(canvas.getByText("Apple Maps Integration")).toBeInTheDocument();
  },
};