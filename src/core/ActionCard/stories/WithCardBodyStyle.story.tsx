import React from "react";
import { ActionCard } from "../ActionCard";
import { Story, testChildren } from "./_ActionCard.default.tsx";

export const WithCardBodyStyle: Story = {
  args: {
    children: testChildren,
    cardBodyStyle: { backgroundColor: "#f0f0f0", padding: "20px" },
  },
};