import React from "react";
import { FadeCarouselAuto } from "../FadeCarouselAuto";
import { Story, sampleItems, SampleItemComponent } from "./_FadeCarouselAuto.default.tsx";

export const WithGap: Story = {
  args: {
    items: sampleItems,
    ItemType: SampleItemComponent,
    gap: 20,
  },
};