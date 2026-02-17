import { GaAccountGMBDataSchema } from '@models/swagger//GaAccountGMBDataSchema';
import { GaAdAccountInsightsSchema } from '@models/swagger//GaAdAccountInsightsSchema';
import { GaAdAccountKeywordsSchema } from '@models/swagger//GaAdAccountKeywordsSchema';
import { GaAdAccountStatusSchema } from '@models/swagger//GaAdAccountStatusSchema';
import { GaAdGroupSchema } from '@models/swagger//GaAdGroupSchema';
import { GaAdLocationsSchema } from '@models/swagger//GaAdLocationsSchema';
import { GaConfigSchema } from '@models/swagger//GaConfigSchema';
import { GaTaxesSchema } from '@models/swagger//GaTaxesSchema';

export const GaAccountSchemaAccountType = {
  slider: 'slider',
  package: 'package',
};

export const GaAccountSchemaAccountTypeStrict = {
  slider: 'slider',
  package: 'package',
} as const;

export const GaAccountSchemaMcc = {
  dev_test: 'dev_test',
  deleted: 'deleted',
  live: 'live',
  test: 'test',
};

export const GaAccountSchemaMccStrict = {
  dev_test: 'dev_test',
  deleted: 'deleted',
  live: 'live',
  test: 'test',
} as const;

export const GaAccountSchemaHandlingFeeType = {
  normal: 'normal',
  paymentFee: 'paymentFee',
};

export const GaAccountSchemaHandlingFeeTypeStrict = {
  normal: 'normal',
  paymentFee: 'paymentFee',
} as const;

export type GaAccountSchema = {
  id?: number;
  budget?: number;
  prepaidBalance?: number;
  nextRechargeAmount?: number;
  lastRechargeDate?: string;
  accountType?: (typeof GaAccountSchemaAccountType)[keyof typeof GaAccountSchemaAccountType];
  isReseller?: boolean;
  locations?: GaAdLocationsSchema;
  initiallySynced?: boolean;
  canSyncAds?: boolean;
  taxes?: GaTaxesSchema;
  adGroups?: GaAdGroupSchema[];
  keywords?: GaAdAccountKeywordsSchema;
  statuses?: GaAdAccountStatusSchema;
  insights?: GaAdAccountInsightsSchema;
  showTutorial?: boolean;
  canDownloadIdentificationData?: boolean;
  initiallySyncedDate?: number;
  userId?: number;
  config?: GaConfigSchema;
  GMBData?: GaAccountGMBDataSchema;
  accountActivityStartDate?: number | null;
  manageRights?: boolean;
  hasAccessToLocal?: boolean;
  mcc?: (typeof GaAccountSchemaMcc)[keyof typeof GaAccountSchemaMcc];
  handlingFeeType?: (typeof GaAccountSchemaHandlingFeeType)[keyof typeof GaAccountSchemaHandlingFeeType];
  forcedCurrency?: string | null;
};
