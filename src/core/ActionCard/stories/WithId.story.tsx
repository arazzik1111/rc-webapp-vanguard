import React from "react";
import { ActionCard } from "../ActionCard";
import { Story, testChildren } from "./_ActionCard.default.tsx";

export const WithId: Story = {
  args: {
    children: testChildren,
    id: "custom-card-id",
  },
};