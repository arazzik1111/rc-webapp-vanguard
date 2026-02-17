import React from "react";
import { within, expect, userEvent } from "storybook/test";
import { Story, InteractiveTabsDemo } from "./_Tab.default";

export const TabsWithMultipleIcons: Story = {
  render: () => (
    <InteractiveTabsDemo
      tabs={[
        {
          label: "Search Engines",
          tabIcons: ["google", "bing"],
          component: (
            <div style={{ padding: "24px", textAlign: "center" }}>
              <h3>Search Engine Listings</h3>
              <p>Manage your presence across multiple search engines.</p>
            </div>
          ),
          value: 0,
        },
        {
          label: "Social Media",
          tabIcons: ["facebook", "twitter"],
          component: (
            <div style={{ padding: "24px", textAlign: "center" }}>
              <h3>Social Media Profiles</h3>
              <p>Connect and manage your social media accounts.</p>
            </div>
          ),
          value: 1,
        },
        {
          label: "Directories",
          tabIcons: ["yelp", "foursquare", "yellowpages"],
          component: (
            <div style={{ padding: "24px", textAlign: "center" }}>
              <h3>Business Directories</h3>
              <p>Manage listings across various business directories.</p>
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

    // Test multiple icons tab
    await userEvent.click(tabElements[2]);
    await expect(canvas.getByText("Business Directories")).toBeInTheDocument();
  },
};