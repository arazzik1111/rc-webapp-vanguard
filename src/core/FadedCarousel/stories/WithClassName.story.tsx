import React from "react";
import { Story, sampleItems } from "./_FadedCarousel.default";

export const WithClassName: Story = {
  args: {
    items: sampleItems,
    className: "custom-carousel-class",
    fade: { enabled: true },
    arrows: { showBorder: true },
  },
};