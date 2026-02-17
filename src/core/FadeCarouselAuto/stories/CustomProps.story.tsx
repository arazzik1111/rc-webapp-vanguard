import React from "react";
import { FadeCarouselAuto } from "../FadeCarouselAuto";
import { Story, sampleItems, SampleItemComponent } from "./_FadeCarouselAuto.default.tsx";

export const CustomProps: Story = {
  args: {
    items: sampleItems,
    ItemType: SampleItemComponent,
    gap: 15,
    speed: 30,
    interval: 8,
  },
};