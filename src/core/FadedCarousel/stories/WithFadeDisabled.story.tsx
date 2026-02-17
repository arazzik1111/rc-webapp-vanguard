import React from "react";
import { Story, sampleItems } from "./_FadedCarousel.default";

export const WithFadeDisabled: Story = {
  args: {
    items: sampleItems,
    fade: { enabled: false },
    arrows: { color: "red" },
  },
};