import React from "react";
import { within, expect, userEvent } from "storybook/test";
import { Story, InteractiveTabsDemo } from "./_Tab.default";

export const SmallTabs: Story = {
  render: () => (
    <InteractiveTabsDemo
      tabConfig={{
        tabHeight: "small",
        iconSize: "small",
        padding: "small",
      }}
      tabs={[
        {
          label: "Compact",
          tabIcons: ["google"],
          component: (
            <div style={{ padding: "16px" }}>
              <h4>Compact Tab</h4>
              <p>This shows small-sized tabs with compact spacing.</p>
            </div>
          ),
          value: 0,
        },
        {
          label: "Efficient",
          tabIcons: ["bing"],
          component: (
            <div style={{ padding: "16px" }}>
              <h4>Efficient Tab</h4>
              <p>Perfect for interfaces with limited space.</p>
            </div>
          ),
          value: 1,
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tabElements = canvas.getAllByRole("tab");
    await expect(tabElements).toHaveLength(2);

    await userEvent.click(tabElements[1]);
    await expect(canvas.getByText("Efficient Tab")).toBeInTheDocument();
  },
};