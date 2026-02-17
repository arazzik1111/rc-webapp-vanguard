import React from "react";
import { StatusBadge } from "../StatusBadge";
import { IconNames } from "@vanguard/Icon/IconNames";
import { Story } from "./_StatusBadge.default";
import { Icon } from '@vanguard/Icon';

export const WithArrowIcons: Story = {
  args: {
    status: "success",
    text: "Up",
    icon: IconNames.arrowUp,
  },

  render: () => {
    return (
      <div style={{ display: "flex", gap: 10 }}>
        <StatusBadge status="success" text="Up" icon={IconNames.arrowUp} />
        <Icon >{IconNames.arrowUp}</Icon>
        <StatusBadge status="danger" text="Down" icon={IconNames.arrowDown} />
        <Icon >{IconNames.arrowDown}</Icon>

      </div>
    );
  },
};