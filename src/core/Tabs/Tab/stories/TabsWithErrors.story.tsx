import React from "react";
import { within, expect, userEvent, waitFor } from "storybook/test";
import { Story, InteractiveTabsDemo } from "./_Tab.default";

export const TabsWithErrors: Story = {
  render: () => (
    <InteractiveTabsDemo
      tabs={[
        {
          label: "Valid Data",
          component: (
            <div style={{ padding: "24px", textAlign: "center", color: "green" }}>
              <h3>✅ All Good</h3>
              <p>This tab has no errors.</p>
            </div>
          ),
          value: 0,
        },
        {
          label: "Has Issues",
          hasError: true,
          component: (
            <div style={{ padding: "24px", textAlign: "center", color: "red" }}>
              <h3>⚠️ Attention Required</h3>
              <p>This tab has validation errors that need to be addressed.</p>
            </div>
          ),
          value: 1,
        },
        {
          label: "Critical Error",
          hasError: true,
          tabIcons: ["google"],
          component: (
            <div style={{ padding: "24px", textAlign: "center", color: "red" }}>
              <h3>🚨 Critical Issue</h3>
              <p>This tab has critical errors with Google integration.</p>
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

    // Test error tab interaction
    await userEvent.click(tabElements[1]);
    await waitFor(() => expect(canvas.getByText("⚠️ Attention Required")).toBeInTheDocument());

    // Test critical error tab
    await userEvent.click(tabElements[2]);
    await waitFor(() => expect(canvas.getByText("🚨 Critical Issue")).toBeInTheDocument());
  },
};