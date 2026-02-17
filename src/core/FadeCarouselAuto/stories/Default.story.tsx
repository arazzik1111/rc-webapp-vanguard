import React from "react";
import { FadeCarouselAuto } from "../FadeCarouselAuto";
import { within, expect } from "storybook/test";
import { Story, sampleItems, SampleItemComponent } from "./_FadeCarouselAuto.default.tsx";

export const Default: Story = {
  args: {
    items: sampleItems,
    ItemType: SampleItemComponent,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Test that the carousel renders with items
    await expect(canvas.getByText("Item 1")).toBeVisible();
    await expect(canvas.getByText("Item 2")).toBeVisible();
  },
};