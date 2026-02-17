import { GaAccountPackageAdsEstimateSchema } from '@models/swagger//GaAccountPackageAdsEstimateSchema';

export type GaAccountPackageAdsSchema = {
  id?: number;
  priceMonthly?: number;
  priceMonthlyFormatted?: string;
  estimate?: GaAccountPackageAdsEstimateSchema;
  packageLink?: string;
  packageLinkOnClick?: string;
};
