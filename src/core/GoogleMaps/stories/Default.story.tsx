import React from "react";
import { GoogleMaps } from "../GoogleMaps";
import { Story, testMapOptions } from "./_GoogleMaps.default";

export const Default: Story = {
  args: {
    center: testMapOptions.center,
    zoom: testMapOptions.zoom,
  },
  parameters: {
    docs: {
      description: {
        story: "Default Google Maps component with standard theme. Add your API key in the Controls panel.",
      },
    },
  },
};