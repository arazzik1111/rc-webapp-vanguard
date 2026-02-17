import { GoogleMapsMarker, GoogleMapsMarkerProps } from "./GoogleMapsMarker";
import React, { ReactNode } from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { mapStorybookActionToProps } from "@test-utils/map-storybook-action-to-props";
import { useLanguage } from "@custom-hooks/jwt-hooks/use-language";
import { useJsApiLoader } from "@react-google-maps/api";
import { APIKEYS } from "@config/apiKeys";

export default SbDecorator({
  title: "Vanguard/GoogleMapsMarker",
  component: GoogleMapsMarker,
  extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: GoogleMapsMarkerProps = {
  onClick: () => {},
  onCloseClick: () => {},
  isJsApiLoaded: false,
  icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAjCAYAAACHIWrsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALXSURBVHgBtZcxb9NAFMffXRKVikRKpyImo6KuDUnFwoChH4DCFwhFYmOBL0ArRgZgQyyQqR1a0k9AzMBSkZKuQJNshalRW4TUODneO9vFdh37zpi/1Prse+df7t27e88MFHRsLpoAYpkBuylAGHgt03NsD7DdweseANsuWZ+tpHexuM4js3qfA3uKZgYoSfTw31rRajdAB3hoVowC5JvYrEAqid4QRrdnrE4/3MPDD36b1+t5yH1JDyOxK/iDd4/M2vK5Hv8NGaALm5CdRA74yrS10zgHJDfSzLyAyFCHQ7CrnnvPXFqAXGsSrFB/COzqPEw9ey7vvSswBhdevIaLH3YgV6lNAs6ge997NxJI0ZgUibxYAoZ/kuNe8zdMB4RgvlCNG145MWv1M6AT+ik0O6tqSUsnGXlnU4OROGJuXs6M+1znzVSRaRCL0wmiYj716AlwXMdpXDNP/NJl0BDOUtzhGCgLSZbjvV0QPw5kW5wcg/3JcjqKRdARHY20hokbfNRpw+m7N7I93FwHe3PDeYGWS6UMAma97+JU5poDArPSXENnjLKlu15+4HBrXa6pJlD0VQyj1mu4tQHj719BQwMEsj78gzTd2uFOttaQ5lbwi1g0w22dQSm2wl8esrhbhwySrNNEZIjXR9ZH7qJfJZmP953gEPvfgq9xo1T8PIgbTrOTDJmAMfmWMWdRAfRfDgFcu57t1jhyhtgYqMwyNQ9Yw8v4gZoGk2RPvSRU5nWxbJzz7njwp7AVyFYCy8Ul/4MAkCJ2BOPHkBEMfbkWrk0jC+Ff5mITjZUS80QaiGbJat8LP488vE/BJtd2ID2ui1H5IKonEkhRi7XkXdWDPQSjMn+J3hHVG/sx43xj5Fo6HzOTvik8xeZDGogvuKU2U9FNgiUCfdBr2LRizFpoU0uCkRhoCOvKVeYWtJ4wGl9iNCpvJS2gCzUZiLeUuHHrrFIG0Bn/B8iyAYtRjCoiAAAAAElFTkSuQmCC",
  size: { x: 19, y: 24 },
  pos: { lat: 45.754092421718696, lng: 21.213081659822983 },
  showInfoBox: true,
  id: "1",
  children: <>Sample text</>,
};

export const GoogleMapMarkerStory = (props: GoogleMapsMarkerProps) => {
  const language = useLanguage();
  const jsApiLoaderResponse = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: APIKEYS.googleMapsApiKey,
    language: language,
    libraries: ["places"],
  });

  /**
   * Here we can add story specific props
   * */
  const propsMock = mapStorybookActionToProps(props, {
    ...defaultProps,
  });

  return (
    <div>
      <GoogleMapsMarker {...propsMock} isJsApiLoaded={jsApiLoaderResponse.isLoaded}>
        ImplementME
      </GoogleMapsMarker>
    </div>
  );
};
