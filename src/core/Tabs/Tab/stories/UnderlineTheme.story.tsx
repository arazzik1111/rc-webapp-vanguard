import React from "react";
import { within, expect, userEvent } from "storybook/test";
import { Story, InteractiveTabsDemo } from "./_Tab.default";

export const UnderlineTheme: Story = {
  render: () => (
    <InteractiveTabsDemo
      tabConfig={{ theme: "underline" }}
      tabs={[
        {
          label: "Overview",
          component: (
            <div style={{ padding: "24px" }}>
              <h3>Overview Tab</h3>
              <p>This demonstrates the underline theme for tabs.</p>
            </div>
          ),
          value: 0,
        },
        {
          label: "Details",
          component: (
            <div style={{ padding: "24px" }}>
              <h3>Details Tab</h3>
              <p>More detailed information goes here.</p>
            </div>
          ),
          value: 1,
        },
        {
          label: "Advanced",
          component: (
            <div style={{ padding: "24px" }}>
              <h3>Advanced Tab</h3>
              <p>Advanced settings and configurations.</p>
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

    // Test theme switching
    await userEvent.click(tabElements[1]);
    await expect(canvas.getByText("Details Tab")).toBeInTheDocument();
  },
};