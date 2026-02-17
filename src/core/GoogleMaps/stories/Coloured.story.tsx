import React from "react";
import { GoogleMaps } from "../GoogleMaps";
import { Story, testMapOptions } from "./_GoogleMaps.default";

export const Coloured: Story = {
  args: {
    theme: "coloured",
    center: testMapOptions.center,
    zoom: testMapOptions.zoom,
  },
  parameters: {
    docs: {
      description: {
        story: "Google Maps component with coloured theme.",
      },
    },
  },
};