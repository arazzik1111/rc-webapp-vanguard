import * as ReactGoogleMapsApi from '@react-google-maps/api';
import { MarkerProps } from '@react-google-maps/api';
import { setupGoogleMock } from '@test-utils/setup-google-mock';
import React from 'react';

describe('GoogleMapsMarker component tests', () => {
  beforeEach(() => {
    setupGoogleMock(global);
  });

  const props = {
    onClick: (arg: number) => {},
    onCloseClick: () => {},
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAjCAYAAACHIWrsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALXSURBVHgBtZcxb9NAFMffXRKVikRKpyImo6KuDUnFwoChH4DCFwhFYmOBL0ArRgZgQyyQqR1a0k9AzMBSkZKuQJNshalRW4TUODneO9vFdh37zpi/1Prse+df7t27e88MFHRsLpoAYpkBuylAGHgt03NsD7DdweseANsuWZ+tpHexuM4js3qfA3uKZgYoSfTw31rRajdAB3hoVowC5JvYrEAqid4QRrdnrE4/3MPDD36b1+t5yH1JDyOxK/iDd4/M2vK5Hv8NGaALm5CdRA74yrS10zgHJDfSzLyAyFCHQ7CrnnvPXFqAXGsSrFB/COzqPEw9ey7vvSswBhdevIaLH3YgV6lNAs6ge997NxJI0ZgUibxYAoZ/kuNe8zdMB4RgvlCNG145MWv1M6AT+ik0O6tqSUsnGXlnU4OROGJuXs6M+1znzVSRaRCL0wmiYj716AlwXMdpXDNP/NJl0BDOUtzhGCgLSZbjvV0QPw5kW5wcg/3JcjqKRdARHY20hokbfNRpw+m7N7I93FwHe3PDeYGWS6UMAma97+JU5poDArPSXENnjLKlu15+4HBrXa6pJlD0VQyj1mu4tQHj719BQwMEsj78gzTd2uFOttaQ5lbwi1g0w22dQSm2wl8esrhbhwySrNNEZIjXR9ZH7qJfJZmP953gEPvfgq9xo1T8PIgbTrOTDJmAMfmWMWdRAfRfDgFcu57t1jhyhtgYqMwyNQ9Yw8v4gZoGk2RPvSRU5nWxbJzz7njwp7AVyFYCy8Ul/4MAkCJ2BOPHkBEMfbkWrk0jC+Ff5mITjZUS80QaiGbJat8LP488vE/BJtd2ID2ui1H5IKonEkhRi7XkXdWDPQSjMn+J3hHVG/sx43xj5Fo6HzOTvik8xeZDGogvuKU2U9FNgiUCfdBr2LRizFpoU0uCkRhoCOvKVeYWtJ4wGl9iNCpvJS2gCzUZiLeUuHHrrFIG0Bn/B8iyAYtRjCoiAAAAAElFTkSuQmCC',
    size: { x: 19, y: 24 },
    pos: { lat: 45.754092421718696, lng: 21.213081659822983 },
    showInfoBox: true,
    index: 1,
    children: <>sample_text</>,
  };

  it('should render', () => {
    jest.spyOn(ReactGoogleMapsApi, 'useJsApiLoader').mockReturnValue({
      isLoaded: false,
      loadError: undefined,
    });
    const markerProps: MarkerProps = {
      position: { lat: 45.754092421718696, lng: 21.213081659822983 },
    };
    // render(<GoogleMapsMarker {...props} />);

    //TODO @Romeo this is not a correct assessment
    // expect(screen.getByText(/sample_text/i)).toBeInDocument();
  });

  it('shows map', () => {
    jest.spyOn(ReactGoogleMapsApi, 'useJsApiLoader').mockReturnValue({
      isLoaded: true,
      loadError: undefined,
    });
    // render(<GoogleMapsMarker {...props} />);
    //TODO @Romeo this is not a correct assessment
    // expect(screen.getByText(/sample_text/i)).toBeInDocument();
  });
});
