import React from "react";
import { Story, sampleItems } from "./_FadedCarousel.default";

export const StartMode: Story = {
  args: {
    items: sampleItems,
    mode: "start",
    fade: { enabled: true, hideAtEdges: false },
    arrows: {
      color: "rgba(4, 5, 6, 0.7)",
      hideOnMobile: false,
      circleSize: 48,
      hoverColor: "rgba(4, 5, 6, 0.8)",
      showBorder: false,
    },
  },
};