import { CompetitorsMapMarker, CompetitorsMapMarkerProps } from "./CompetitorsMapMarker";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";

export default SbDecorator({
  title: "components/CompetitorsMap/CompetitorsMapMarkers/CompetitorsMapMarker",
  component: CompetitorsMapMarker,
  extra: {
    ...disableControls([""]),
  },
});

export const CompetitorsMapMarkerStory = (props: CompetitorsMapMarkerProps) => {
  return (
    <div>
      <CompetitorsMapMarker {...props}>ImplementME</CompetitorsMapMarker>
    </div>
  );
};
