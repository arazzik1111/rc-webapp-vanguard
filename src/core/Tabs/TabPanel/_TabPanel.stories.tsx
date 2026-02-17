import { SbDecorator } from "@test-utils/get-storybook-decorator";
import React from "react";
import { TabPanel } from "./TabPanel";
import { Story } from "./stories/_TabPanel.default";
import { Default as _Default } from "./stories/Default.story";
import { ActivePanel as _ActivePanel } from "./stories/ActivePanel.story";
import { InactivePanel as _InactivePanel } from "./stories/InactivePanel.story";

export const Default: Story = { ..._Default };
export const ActivePanel: Story = { ..._ActivePanel };
export const InactivePanel: Story = { ..._InactivePanel };

export default {
  ...SbDecorator({
    title: "Vanguard/Tabs/TabPanel",
    component: TabPanel,
    extra: {
      args: {
        currentTab: 0,
        value: 0,
        children: <div>Tab panel content</div>,
      },
    },
  }),
};
