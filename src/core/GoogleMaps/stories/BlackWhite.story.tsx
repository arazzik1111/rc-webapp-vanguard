import React from "react";
import { GoogleMaps } from "../GoogleMaps";
import { Story, testMapOptions } from "./_GoogleMaps.default";

export const BlackWhite: Story = {
  args: {
    theme: "blackWhite",
    center: testMapOptions.center,
    zoom: testMapOptions.zoom,
  },
  parameters: {
    docs: {
      description: {
        story: "Google Maps component with black and white theme.",
      },
    },
  },
};