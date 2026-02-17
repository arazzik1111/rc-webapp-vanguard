import React from "react";
import { GoogleMaps } from "../GoogleMaps";
import { Story, testMapOptions } from "./_GoogleMaps.default";

export const BlackWhiteNoPoi: Story = {
  args: {
    theme: "blackWhiteNoPoi",
    center: testMapOptions.center,
    zoom: testMapOptions.zoom,
  },
  parameters: {
    docs: {
      description: {
        story: "Google Maps component with black and white theme without points of interest.",
      },
    },
  },
};