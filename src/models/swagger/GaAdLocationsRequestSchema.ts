import { GaAdLocationSchema } from '@models/swagger//GaAdLocationSchema';

export type GaAdLocationsRequestSchema = {
  locations: string[];
  is_locally_focused?: boolean;
  locations_formatted: GaAdLocationSchema[];
  operation_radius: number;
};
