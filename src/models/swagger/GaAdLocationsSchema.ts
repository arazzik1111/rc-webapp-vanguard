import { GaAdGeoLocationSchema } from '@models/swagger//GaAdGeoLocationSchema';
import { GaAdLocationSchema } from '@models/swagger//GaAdLocationSchema';

export type GaAdLocationsSchema = {
  locations?: string[];
  is_locally_focused?: boolean;
  locations_formatted?: GaAdLocationSchema[];
  operation_radius?: number;
  max_cities?: number;
  project_geo_location: GaAdGeoLocationSchema;
  language: string;
  country_shortcode: string;
  country_name?: string;
  formatted_address?: string;
};
