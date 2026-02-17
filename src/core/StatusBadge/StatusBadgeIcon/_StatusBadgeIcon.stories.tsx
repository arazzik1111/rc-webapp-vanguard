import { StatusBadgeIcon, StatusBadgeIconProps } from "./StatusBadgeIcon";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { StoryObj } from "@storybook/react";
import { fn, userEvent, within, expect, screen } from "storybook/test";
import { StatusBadge } from "@vanguard/StatusBadge/StatusBadge";
import { statusBadgeGetAllStates } from "@vanguard/StatusBadge/status-badge-get-all-states";
import { Text } from "@vanguard/Text/Text";

export default {
  ...SbDecorator({
    title: "Vanguard/StatusBadge/StatusBadgeIcon",
    component: StatusBadgeIcon,
    extra: {
      ...disableControls([""]),
    },
  }),
};

/**
 * We create the story type referencing its component
 */
type Story = StoryObj<typeof StatusBadgeIcon>;

export const StatusBadgeIconStory: Story = {
  args: {
    status: "neutral",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
  },
};

export const StatusBadgeAll: Story = {
  args: {},

  render: () => {
    const allStatusBadgeStatusValues = statusBadgeGetAllStates();

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", flexDirection: "row", gap: 25, flexWrap: "wrap" }}>
          {allStatusBadgeStatusValues.map((status) => {
            return (
              <div style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: 14 }}>
                <StatusBadgeIcon status={status}></StatusBadgeIcon>
                <StatusBadgeIcon status={status} variant={"big"}></StatusBadgeIcon>
              </div>
            );
          })}
        </div>
        <Text>Reversed...</Text>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 25,
            flexWrap: "wrap",
            borderTop: "2px solid #cacaca",
          }}
        >
          {allStatusBadgeStatusValues.map((status) => {
            return (
              <div style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: 14, paddingTop: 5 }}>
                <StatusBadgeIcon status={status} hasIconReverse={true}></StatusBadgeIcon>
                <StatusBadgeIcon status={status} variant={"big"} hasIconReverse={true}></StatusBadgeIcon>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};
