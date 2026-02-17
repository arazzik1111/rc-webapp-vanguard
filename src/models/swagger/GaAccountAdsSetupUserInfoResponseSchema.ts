import { GaAccountAdsSetupUserInfoSchema } from '@models/swagger//GaAccountAdsSetupUserInfoSchema';

export type GaAccountAdsSetupUserInfoResponseSchema = {
  status?: number;
  data?: GaAccountAdsSetupUserInfoSchema;
  message?: string;
};
