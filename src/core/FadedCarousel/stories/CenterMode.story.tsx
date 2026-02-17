import React from "react";
import { Story, sampleItems } from "./_FadedCarousel.default";

export const CenterMode: Story = {
  args: {
    items: sampleItems,
    mode: "center",
    fade: { enabled: true, hideAtEdges: true },
    arrows: {
      color: "#333",
      hideOnMobile: false,
      circleSize: 48,
      hoverColor: "#555",
      showBorder: true,
    },
  },
};