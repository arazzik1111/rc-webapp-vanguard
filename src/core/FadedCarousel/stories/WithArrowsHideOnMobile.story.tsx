import React from "react";
import { Story, sampleItems } from "./_FadedCarousel.default";

export const WithArrowsHideOnMobile: Story = {
  args: {
    items: sampleItems,
    arrows: {
      hideOnMobile: true,
      color: "green",
      circleSize: 40,
    },
  },
};