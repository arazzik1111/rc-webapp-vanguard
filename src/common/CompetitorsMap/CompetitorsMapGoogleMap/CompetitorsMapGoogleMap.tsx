import { CompetitorsMapProps } from '@common/CompetitorsMap/CompetitorsMap';
// import { PresenceInsightsState } from "@redux-stores/presence/presence-insights.store";
// import { PresenceDashboardState } from "@redux-stores/presence/presence-dashboard.store";
// import { ReputationInsightsState } from "@redux-stores/reputation/reputation-insights.store";
import { CompetitorsMapMarker } from '@common/CompetitorsMap/CompetitorsMapGoogleMap/CompetitorsMapMarker/CompetitorsMapMarker';
import { CompetitorsMapRadius } from '@common/CompetitorsMap/CompetitorsMapGoogleMap/CompetitorsMapRadius/CompetitorsMapRadius';
import { useGoogleMapApiLoader } from '@custom-hooks/use-google-map-api-loader';
import { rcWindow } from '@stores/window.store';
import { panToOffset } from '@vanguard/GoogleMaps/_helpers/pan-to-offset';
import { GoogleMaps } from '@vanguard/GoogleMaps/GoogleMaps';
import { Render } from '@vanguard/Render/Render';
import React, { useCallback, useEffect, useState } from 'react';

const COMPETITORS_MAP_X_OFFSET = -100;
export const CompetitorsMapGoogleMap = (props: CompetitorsMapProps) => {
  const {
    showTargetRegionOverlay = false,
    competitorsMapItems,
    ownBusiness,
    languageCode,
    clickedCompetitorIndex,
    hoveredCompetitorIndex,
  } = props;

  // const { competitors, clickedCompetitorIndex } = useSelector(
  //   (state: PresenceInsightsState | PresenceDashboardState | ReputationInsightsState) => state.CompetitorsMapReducer,
  // );

  /**
   * Google Maps API Loading
   */
  const googleMapApi = useGoogleMapApiLoader(['places'], undefined, languageCode);
  const [map, setMap] = useState<google.maps.Map>();
  const handleOnLoad = useCallback((loadedMap: google.maps.Map) => {
    setMap(loadedMap);
  }, []);

  /**
   * Pin Initial Centering
   */
  const [mapCentered, setMapCentered] = useState(false);
  useEffect(() => {
    if (!mapCentered && map && competitorsMapItems.length > 0) {
      setTimeout(() => {
        centerMapOnCompetitors();
      }, 0);
      setTimeout(() => {
        centerMapOnCompetitors();
      }, 1000);
    }
  }, [map, competitorsMapItems]);

  const centerMapOnCompetitors = () => {
    if (rcWindow['google'] && map) {
      setMapCentered(true);

      const bounds = new google.maps.LatLngBounds();
      for (const item of competitorsMapItems) {
        bounds.extend({ lat: item.lat, lng: item.lng });
      }

      map.fitBounds(bounds);
      map.setCenter(bounds.getCenter());
      map.panBy(COMPETITORS_MAP_X_OFFSET, 0);
    } else {
      console.error('Google Maps API not loaded | centerMapOnCompetitors');
    }
  };

  /**
   * Pin Centering onCLICK
   */
  useEffect(() => {
    const clickedCompetitor = competitorsMapItems[clickedCompetitorIndex];
    if (clickedCompetitor) {
      if (rcWindow['google'] && map) {
        panToOffset(clickedCompetitor.lat, clickedCompetitor.lng, map, {
          x: COMPETITORS_MAP_X_OFFSET,
          y: 0,
        });
      } else {
        console.error('Google Maps API not loaded | Pin Centering onCLICK');
      }
    }
  }, [clickedCompetitorIndex]);

  /**
   * Return view
   * ---
   */
  return (
    <GoogleMaps
      testId={'CompetitorsMap-GoogleMaps-testid'}
      theme={'coloured'}
      isJsApiLoaded={googleMapApi.isLoaded}
      onLoad={handleOnLoad}
      zoom={10}
      options={{
        streetViewControl: false,
        mapTypeControlOptions: {
          mapTypeIds: [],
        },
      }}
    >
      {competitorsMapItems.map((item, index) => (
        <CompetitorsMapMarker
          clickedCompetitorIndex={clickedCompetitorIndex}
          hoveredCompetitorIndex={hoveredCompetitorIndex}
          isJsApiLoaded={googleMapApi.isLoaded}
          key={index}
          index={index}
          competitor={item}
        />
      ))}

      <Render if={showTargetRegionOverlay}>
        <CompetitorsMapRadius ownBusiness={ownBusiness} />
      </Render>
    </GoogleMaps>
  );
};
