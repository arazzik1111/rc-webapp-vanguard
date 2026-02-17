import { InfoBox, Marker } from '@react-google-maps/api';
import { Clusterer } from '@react-google-maps/marker-clusterer';
import React, { MutableRefObject, ReactNode } from 'react';

export interface GoogleMapsMarkerProps {
  id: string;
  isJsApiLoaded: boolean; // you must preload Google JS API before. See: useJsApiLoader()
  onClick?: (id: string) => void;
  onCloseClick?: () => void;
  onMouseOver?: (e: google.maps.MapMouseEvent) => void;
  onMouseOut?: (e: google.maps.MapMouseEvent) => void;
  icon: string;
  size: { x: number; y: number };
  pos: { lat: number; lng: number };
  showInfoBox: boolean;
  disableAutoPan?: boolean;
  zIndex?: number;
  children?: ReactNode;
  clusterer?: Clusterer;
  markerRef?: MutableRefObject<Marker>;
  draggable?: boolean;
  onDragEnd?: (e: google.maps.MapMouseEvent) => void;
}

export const GoogleMapsMarker = (props: GoogleMapsMarkerProps) => {
  const {
    onClick,
    onMouseOver,
    onMouseOut,
    onCloseClick,
    id,
    icon,
    size,
    zIndex,
    pos,
    showInfoBox,
    children,
    clusterer,
    disableAutoPan = false,
    markerRef = undefined,
    draggable,
    onDragEnd,
  } = props;

  return (
    <Marker
      key={id}
      ref={markerRef}
      clusterer={clusterer}
      position={pos}
      onClick={() => onClick && onClick(id)}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      zIndex={zIndex}
      draggable={draggable}
      onDragEnd={onDragEnd}
      icon={{
        url: icon,
        scaledSize: new google.maps.Size(size.x, size.y),
      }}
    >
      {showInfoBox && (
        <InfoBox
          options={{
            maxWidth: 300,
            disableAutoPan: disableAutoPan,
            zIndex: 100,
            alignBottom: true,
            // pane: "mapPane",
            pixelOffset: new google.maps.Size(size.x, 10),
            boxStyle: INFOBOX_STYLE,
            closeBoxURL: '',
            enableEventPropagation: false,
          }}
          onCloseClick={onCloseClick}
        >
          {children}
        </InfoBox>
      )}
    </Marker>
  );
};

const INFOBOX_STYLE = {
  minWidth: '120px',
  boxShadow: '0 0 6px rgba(0,0,0,.1)',
  borderRadius: '8px',
  padding: '4px 6px',
  background: 'white',
  lineHeight: '14px',
};
