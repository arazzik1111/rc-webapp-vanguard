import { GaAccountPackageAdsDataSchema } from '@models/swagger//GaAccountPackageAdsDataSchema';

export type GaAccountPackageAdsDataResponseSchema = {
  status?: number;
  data?: GaAccountPackageAdsDataSchema;
  message?: string;
};
