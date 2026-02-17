import React from "react";
import { GoogleMaps } from "../GoogleMaps";
import { Story, testMapOptions } from "./_GoogleMaps.default";

export const ExternalLoading: Story = {
  args: {
    isJsApiLoaded: true, // Simulate external loading
    theme: "default",
    center: testMapOptions.center,
    zoom: testMapOptions.zoom,
  },
  parameters: {
    docs: {
      description: {
        story: "Google Maps component with external API loading using isJsApiLoaded prop.",
      },
    },
  },
};