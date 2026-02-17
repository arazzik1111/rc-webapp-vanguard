import { SbDecorator } from "@test-utils/get-storybook-decorator";
import React from "react";
import { StoryObj } from "@storybook/react";
import { Tabs, TabsProps } from "./Tabs";
import { within, expect } from "storybook/test";

export default {
  ...SbDecorator({
    title: "Vanguard/Tabs",
    component: Tabs,
    extra: {
      args: {
        tabs: [
          {
            label: "General keywords",
            component: <h2>General keywords tab</h2>,
          },
          {
            label: "Negative keywords",
            component: <h2>Negative keywords tab</h2>,
          },
          {
            label: "Brand keywords",
            component: <h2>Brand keywords tab</h2>,
          },
        ],
      },
    },
  }),
};

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: "1112px", height: "718px", textAlign: "center", paddingTop: "50px" }}>
      <Tabs {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Test that tabs render successfully
    const tabElements = canvas.getAllByRole('tab');
    await expect(tabElements).toHaveLength(3);
    
    // Test that the first tab has the correct label
    await expect(tabElements[0]).toHaveTextContent('General keywords');
    await expect(tabElements[1]).toHaveTextContent('Negative keywords');
    await expect(tabElements[2]).toHaveTextContent('Brand keywords');
  },
};

export const TwoTabs: Story = {
  args: {
    tabs: [
      {
        label: "Tab One",
        component: <div>Content for tab one</div>,
      },
      {
        label: "Tab Two",
        component: <div>Content for tab two</div>,
      },
    ],
  },
  render: (args) => (
    <div style={{ width: "800px", height: "400px", padding: "20px" }}>
      <Tabs {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    const tabElements = canvas.getAllByRole('tab');
    await expect(tabElements).toHaveLength(2);
    await expect(tabElements[0]).toHaveTextContent('Tab One');
    await expect(tabElements[1]).toHaveTextContent('Tab Two');
  },
};
