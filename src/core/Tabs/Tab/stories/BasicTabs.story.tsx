import React from "react";
import { within, expect, userEvent } from "storybook/test";
import { Story, InteractiveTabsDemo } from "./_Tab.default";

export const BasicTabs: Story = {
  render: () => (
    <InteractiveTabsDemo
      tabs={[
        {
          label: "Dashboard",
          component: (
            <div style={{ padding: "24px", textAlign: "center" }}>
              <h3>Dashboard Content</h3>
              <p>Welcome to your dashboard! Here you can see an overview of your data.</p>
            </div>
          ),
          value: 0,
        },
        {
          label: "Analytics",
          component: (
            <div style={{ padding: "24px", textAlign: "center" }}>
              <h3>Analytics Content</h3>
              <p>View detailed analytics and reports here.</p>
            </div>
          ),
          value: 1,
        },
        {
          label: "Settings",
          component: (
            <div style={{ padding: "24px", textAlign: "center" }}>
              <h3>Settings Content</h3>
              <p>Configure your application settings.</p>
            </div>
          ),
          value: 2,
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test that tabs render successfully
    const tabElements = canvas.getAllByRole("tab");
    await expect(tabElements).toHaveLength(3);

    // Test tab labels
    await expect(tabElements[0]).toHaveTextContent("Dashboard");
    await expect(tabElements[1]).toHaveTextContent("Analytics");
    await expect(tabElements[2]).toHaveTextContent("Settings");

    // Test tab interaction
    await userEvent.click(tabElements[1]);
    await expect(canvas.getByText("Analytics Content")).toBeInTheDocument();
  },
};
