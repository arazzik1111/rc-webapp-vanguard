import { Marker, MarkerProps } from '@react-google-maps/api';

export type GoogleMapsMarkerDefaultProps = {} & MarkerProps;

export const GoogleMapsMarkerDefault = (props: GoogleMapsMarkerDefaultProps) => {
  return <Marker {...props} />;
};
