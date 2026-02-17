import React from "react";
import { Story, sampleItems } from "./_FadedCarousel.default";

export const WithMaxVisibleItems: Story = {
  args: {
    items: sampleItems,
    maxVisibleItems: 3,
    mode: "start",
    fade: { enabled: true },
    arrows: { showBorder: true },
  },
};