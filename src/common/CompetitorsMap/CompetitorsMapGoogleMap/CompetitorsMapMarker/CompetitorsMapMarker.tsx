import { CompetitorMapItem, CompetitorsMapSlice } from '@common/CompetitorsMap/CompetitorsMap.slice';
import { CompetitorsMapInfoBox } from '@common/CompetitorsMap/CompetitorsMapGoogleMap/CompetitorsMapMarker/CompetitorsMapInfoBox/CompetitorsMapInfoBox';
import { useAppDispatch } from '@custom-hooks/use-app-dispatch';
import { GoogleMapsMarker } from '@vanguard/GoogleMaps/GoogleMapsMarker/GoogleMapsMarker';
import { defaultMarkerIcon } from '@vanguard/GoogleMaps/GoogleMapsMarker/icons/google-maps-marker-icons';
import React, { useEffect, useMemo, useState } from 'react';
// import { PresenceInsightsState } from "@redux-stores/presence/presence-insights.store";
// import { PresenceDashboardState } from "@redux-stores/presence/presence-dashboard.store";
// import { ReputationInsightsState } from "@redux-stores/reputation/reputation-insights.store";

export interface CompetitorsMapMarkerProps {
  index: number;
  competitor: CompetitorMapItem;
  isJsApiLoaded: boolean; // you must preload Google JS API before. See: useJsApiLoader()
  clickedCompetitorIndex: number;
  hoveredCompetitorIndex: number;
}

export const CompetitorsMapMarker = (props: CompetitorsMapMarkerProps) => {
  const dispatch = useAppDispatch();

  const { competitor, index, isJsApiLoaded, clickedCompetitorIndex, hoveredCompetitorIndex } = props;
  const { isOwnLocation, position, id, lng, lat, rating, companyName, reviewsCount } = competitor;
  const { setClickedCompetitor } = CompetitorsMapSlice;

  const [clicked, setClicked] = React.useState(false);
  const [sidebarHovered, setSidebarHovered] = React.useState(false);
  const [markerHovered, setMarkerHovered] = React.useState(false);

  useEffect(() => {
    setClicked(index === clickedCompetitorIndex);
    setSidebarHovered(index === hoveredCompetitorIndex);
  }, [clickedCompetitorIndex, hoveredCompetitorIndex]);

  /**
   * Color, ZIndex, Size
   */
  const [color, setColor] = React.useState('#F76E64');
  const [zIndex, setZIndex] = React.useState(1);
  const [size, setSize] = React.useState<{ x: number; y: number }>({ x: 28, y: 35 });
  useEffect(() => {
    // Color
    if (isOwnLocation) {
      if (sidebarHovered || markerHovered) {
        setColor('#003179');
      } else if (clicked) {
        setColor('#003B99');
      } else {
        setColor('#0062FF');
      }
    } else {
      if (sidebarHovered || markerHovered) {
        setColor('#cc3a2d');
      } else if (clicked) {
        setColor('#F44034');
      } else {
        setColor('#F76E64');
      }
    }

    // ZIndex
    if (sidebarHovered || markerHovered) {
      setZIndex(15);
    } else if (clicked) {
      setZIndex(10);
    } else if (isOwnLocation) {
      setZIndex(5);
    } else {
      setZIndex(1);
    }

    // Size
    if (clicked) {
      setSize({ x: 40, y: 48 });
    } else {
      setSize({ x: 28, y: 35 });
    }
  }, [isOwnLocation, clicked, sidebarHovered, markerHovered]);

  /**
   * Icon
   */
  const imgSvg = useMemo(() => {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(defaultMarkerIcon(position, color))}`;
  }, [color]);

  /**
   * InfoBox
   */
  const [showInfoBox, setShowInfoBox] = useState(false);
  useEffect(() => {
    setShowInfoBox(clicked || sidebarHovered || markerHovered);
  }, [clicked, sidebarHovered, markerHovered]);

  /**
   * Return view
   * ---
   */
  return (
    <GoogleMapsMarker
      isJsApiLoaded={isJsApiLoaded}
      key={id}
      id={id}
      disableAutoPan={true}
      pos={{ lat, lng }}
      icon={imgSvg}
      zIndex={zIndex}
      size={size}
      showInfoBox={showInfoBox}
      onClick={() => {
        dispatch(setClickedCompetitor({ index: index }));
      }}
      onMouseOver={() => {
        setMarkerHovered(true);
      }}
      onMouseOut={() => {
        setMarkerHovered(false);
      }}
    >
      <CompetitorsMapInfoBox title={companyName} ratingScore={rating} ratingCount={reviewsCount} color={'--n400'} />
    </GoogleMapsMarker>
  );
};
