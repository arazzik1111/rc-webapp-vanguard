import React from "react";
import { GoogleMaps } from "../GoogleMaps";
import { Story, testMapOptions, createMockOnLoad } from "./_GoogleMaps.default";

export const WithCustomProps: Story = {
  args: {
    theme: "default",
    testId: "custom-google-maps-test-id",
    mapId: "custom-map-id",
    onLoad: createMockOnLoad(),
    center: testMapOptions.center,
    zoom: testMapOptions.zoom,
  },
  parameters: {
    docs: {
      description: {
        story: "Google Maps component with custom testId, mapId, and onLoad callback.",
      },
    },
  },
};