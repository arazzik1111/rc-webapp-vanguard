import { useGoogleMapApiLoader } from '@custom-hooks/use-google-map-api-loader';
import { Marker } from '@react-google-maps/api';
import { rcWindow } from '@stores/window.store';
import { GoogleMaps } from '@vanguard/GoogleMaps/GoogleMaps';
import { Render } from '@vanguard/Render/Render';
import React, { useEffect, useState } from 'react';

export interface LocationCardGoogleMapsProps {
  lat: string;
  lng: string;
  languageCode: string;
}
export const LocationCardGoogleMaps = (props: LocationCardGoogleMapsProps) => {
  const { lat, lng, languageCode } = props;

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [isGoogleMapVisible, setIsGoogleMapVisible] = useState(false);

  const handleOnLoad = React.useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback((map) => {
    setMap(null);
  }, []);
  const geocodeItem = {
    lat: parseFloat(`${lat}`) ?? 0,
    lng: parseFloat(`${lng}`) ?? 0,
  };

  useEffect(() => {
    if (rcWindow['google']) {
      const bounds = new google.maps.LatLngBounds();

      const extra = 0.001;
      const latParsed = parseFloat(`${lat}`) ?? undefined;
      const lngParsed = parseFloat(`${lng}`) ?? undefined;
      bounds.extend({
        lat: latParsed + extra,
        lng: lngParsed + extra,
      });
      bounds.extend({
        lat: latParsed - extra,
        lng: lngParsed - extra,
      });

      if (map) {
        map.fitBounds(bounds);
      }
    }
  }, [map]);

  const jsApiLoaderResponse = useGoogleMapApiLoader(['places'], undefined, languageCode);

  useEffect(() => {
    if (jsApiLoaderResponse.isLoaded) {
      setIsGoogleMapVisible(true);
    }
  }, [jsApiLoaderResponse.isLoaded]);

  return (
    <Render if={isGoogleMapVisible}>
      <GoogleMaps
        isJsApiLoaded={jsApiLoaderResponse.isLoaded}
        zoom={30}
        options={{
          fullscreenControl: false,
          streetViewControl: false,
          mapTypeControlOptions: {
            mapTypeIds: [],
          },
        }}
        theme={'blackWhite'}
        onLoad={handleOnLoad}
        onUnmount={onUnmount}
      >
        <React.Fragment key={1}>
          <Marker position={geocodeItem} />
        </React.Fragment>
      </GoogleMaps>
    </Render>
  );
};
