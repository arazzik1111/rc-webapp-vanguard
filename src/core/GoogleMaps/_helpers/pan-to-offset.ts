/**
 * By default, panTo will center the map on the marker
 * This function will pan the map to the marker, but offset it by the specified amount (x,y)
 */
export const panToOffset = (lat: number, lng: number, map: google.maps.Map, offset?: { y: number; x: number }) => {
  const latLng = new google.maps.LatLng({ lat, lng });
  if (offset === undefined) {
    map.panTo(latLng);
    return;
  }

  const projection = map.getProjection();
  if (!projection) {
    return;
  }

  const point = projection.fromLatLngToPoint(latLng);
  if (!point) {
    return;
  }

  const zoom = map.getZoom();
  if (!zoom) {
    return;
  }

  // Apply the offset
  point.y += offset.y / Math.pow(2, zoom);
  point.x += offset.x / Math.pow(2, zoom);

  // Convert back to LatLng
  const newLatLng = projection.fromPointToLatLng(point);
  if (!newLatLng) {
    return;
  }

  map.panTo(newLatLng);
};
