import React from "react";
import { StatusBadge } from "../StatusBadge";
import { Story, statusBadgeGetAllStates } from "./_StatusBadge.default";

export const StatusBadgeAllInverted: Story = {
  args: {
    status: "neutral",
    hideIcon: true,
    text: "Internal text",
  },

  render: () => {
    const allStatusBadgeStatusValues = statusBadgeGetAllStates();

    return (
      <div
        style={{
          display: "grid",
          width: "90vw",
          // padding: 40,
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: 25,
        }}
      >
        {allStatusBadgeStatusValues.map((status) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <StatusBadge status={status} text={status} iconVariant={"reverse"} />
              <StatusBadge status={status} text={status} numberValue={22} iconVariant={"reverse"} />
              <StatusBadge status={status} text={status} variant="big" iconVariant={"reverse"} />
            </div>
          );
        })}
      </div>
    );
  },
};