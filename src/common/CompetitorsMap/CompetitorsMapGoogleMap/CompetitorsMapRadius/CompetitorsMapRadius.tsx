import { CompetitorMapItem } from '@common/CompetitorsMap/CompetitorsMap.slice.ts';
import { Circle } from '@react-google-maps/api';
import React from 'react';
// import { PresenceInsightsState } from "@redux-stores/presence/presence-insights.store";
// import { PresenceDashboardState } from "@redux-stores/presence/presence-dashboard.store";
// import { ReputationInsightsState } from "@redux-stores/reputation/reputation-insights.store";

type CompetitorsMapRadiusProps = {
  ownBusiness: CompetitorMapItem;
};
export const CompetitorsMapRadius = (props: CompetitorsMapRadiusProps) => {
  const { ownBusiness } = props;

  /**
   * We position the overlay starting from the center of the Own Business marker, so it is required
   */
  if (ownBusiness === undefined) {
    // console.warn("CompetitorsMapRadius| Own Business is undefined");
    return null;
  }

  /**
   * Return view
   */
  return (
    <Circle
      center={{
        lat: ownBusiness.lat,
        lng: ownBusiness.lng,
      }}
      radius={400}
      options={{
        strokeColor: '#FFFFFF', //variables are not supported by strokeColor
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#84c3df', //variables are not supported by fillColor
        fillOpacity: 0.2,
        zIndex: 1,
      }}
    />
  );
};
