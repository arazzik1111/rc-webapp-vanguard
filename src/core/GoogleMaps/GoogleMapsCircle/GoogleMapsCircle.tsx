import { Circle, CircleProps } from '@react-google-maps/api';

export type GoogleMapsCircleProps = CircleProps & {};

export const GoogleMapsCircle = (props: GoogleMapsCircleProps) => {
  return <Circle {...props} />;
};
