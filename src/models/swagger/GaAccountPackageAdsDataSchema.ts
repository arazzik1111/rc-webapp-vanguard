import { GaAccountPackageAdsFAQsSchema } from '@models/swagger//GaAccountPackageAdsFAQsSchema';
import { GaAccountPackageAdsSchema } from '@models/swagger//GaAccountPackageAdsSchema';
import { GaAccountSuspensionPackageAdsSchema } from '@models/swagger//GaAccountSuspensionPackageAdsSchema';

export type GaAccountPackageAdsDataSchema = {
  recommendedPackageId?: number;
  selectedPackageId?: number;
  activePackageId?: number;
  FAQs?: GaAccountPackageAdsFAQsSchema[];
  showFAQs?: boolean;
  adsLayoutMode?: string;
  adsPriceLayout?: string;
  hideSuspendButton?: boolean;
  allowDowngrade?: boolean;
  packages?: GaAccountPackageAdsSchema[];
  suspensionPackage?: GaAccountSuspensionPackageAdsSchema;
  lastActivePackage?: GaAccountSuspensionPackageAdsSchema;
  availableBudget?: number;
  isSuspendInitiated?: boolean;
};
