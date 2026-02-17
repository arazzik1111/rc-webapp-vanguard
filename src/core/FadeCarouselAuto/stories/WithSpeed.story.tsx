import React from "react";
import { FadeCarouselAuto } from "../FadeCarouselAuto";
import { Story, sampleItems, SampleItemComponent } from "./_FadeCarouselAuto.default.tsx";

export const WithSpeed: Story = {
  args: {
    items: sampleItems,
    ItemType: SampleItemComponent,
    speed: 50,
  },
};