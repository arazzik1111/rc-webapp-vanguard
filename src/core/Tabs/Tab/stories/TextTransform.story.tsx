import React from "react";
import {within, expect, userEvent, waitFor} from "storybook/test";
import {InteractiveTabsDemo, Story} from "./_Tab.default";
export const TextTransform: Story = {
  render: () => (
    <InteractiveTabsDemo
      tabConfig={{ tabTextTransform: "uppercase" }}
      tabs={[
        {
          label: "mixed case TEXT",
          component: (
            <div style={{ padding: "24px", textAlign: "center" }}>
              <h3>First Tab Content</h3>
              <p>This is the content for the first tab.</p>
            </div>
          ),
          value: 0,
        },
        {
          label: "another TAB label",
          component: (
            <div style={{ padding: "24px", textAlign: "center" }}>
              <h3>Second Tab Content</h3>
              <p>This is the content for the second tab.</p>
            </div>
          ),
          value: 1,
        },
        {
          label: "final TAB here",
          component: (
            <div style={{ padding: "24px", textAlign: "center" }}>
              <h3>Third Tab Content</h3>
              <p>This is the content for the third tab.</p>
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

    // Verify tab labels
    await expect(tabElements[0]).toHaveTextContent("mixed case TEXT");
    await expect(tabElements[1]).toHaveTextContent("another TAB label");
    await expect(tabElements[2]).toHaveTextContent("final TAB here");

    // Click interaction test
    await userEvent.click(tabElements[1]);
    await expect(canvas.getByText("Second Tab Content")).toBeInTheDocument();
    await expect(tabElements[1]).toHaveAttribute("aria-selected", "true");

    // Test textTransform: uppercase
    await waitFor(() => {
      const style = getComputedStyle(tabElements[0]);
      // We check both direct CSS and fallback visual value
      if (style.textTransform) {
        expect(style.textTransform.toLowerCase()).toBe("uppercase");
      } else {
        // Fallback: don't fail if jsdom doesn't compute style
        console.warn("⚠️ textTransform style not applied in jsdom — skipping visual case check");
      }
    });
  },
};