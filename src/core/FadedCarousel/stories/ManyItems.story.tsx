import React from "react";
import { Story, manyItems } from "./_FadedCarousel.default";

export const ManyItems: Story = {
  args: {
    items: manyItems,
    mode: "start",
    fade: { enabled: true, hideAtEdges: false },
    arrows: {
      color: "darkblue",
      hideOnMobile: false,
      circleSize: 48,
      hoverColor: "blue",
      showBorder: true,
    },
  },
};