import React from "react";
import { Story, sampleItems } from "./_FadedCarousel.default";

export const WithScrollOffset: Story = {
  args: {
    items: sampleItems,
    scrollOffset: 500,
    mode: "start",
    fade: { enabled: true },
    arrows: { circleSize: 60 },
  },
};