import { APIKEYS } from '@config/apiKeys';
import { useJsApiLoader } from '@react-google-maps/api';
import { useEffect, useRef, useState } from 'react';

export const useGoogleMapApiLoader = (
  GoogleApiLibrariesToLoad?: any,
  apiKey: string = APIKEYS.googleMapsApiKey,
  languageCode?: string,
): { isLoaded: boolean; loadError: Error | undefined } => {
  const [isApiLoaded, setApiLoaded] = useState(false);
  const [loadError, setLoadError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.google) {
      setApiLoaded(true);
    } else {
      // Note: No hooks should be called here
    }
  }, []);

  // Moved outside of useEffect to maintain proper hook usage
  GoogleApiLibrariesToLoad = ['places', 'marker'];
  const lib = useRef(GoogleApiLibrariesToLoad);

  const { isLoaded, loadError: jsApiLoadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
    language: languageCode,
    libraries: lib.current,
  });

  useEffect(() => {
    if (!isApiLoaded && jsApiLoadError) {
      setLoadError(jsApiLoadError);
    }
    setApiLoaded(isLoaded);
  }, [isLoaded, jsApiLoadError]);

  return { isLoaded: isApiLoaded, loadError };
};
