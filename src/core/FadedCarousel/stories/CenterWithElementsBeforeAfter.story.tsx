import React from "react";
import { Story, sampleItems } from "./_FadedCarousel.default";

export const CenterWithElementsBeforeAfter: Story = {
  args: {
    items: sampleItems,
    mode: "centerWithElementsBeforeAfter",
    maxVisibleItems: 5,
    fade: { enabled: true, hideAtEdges: true },
    arrows: {
      color: "teal",
      hideOnMobile: false,
      circleSize: 48,
      hoverColor: "rgba(0, 128, 128, 0.8)",
      showBorder: true,
    },
  },
};