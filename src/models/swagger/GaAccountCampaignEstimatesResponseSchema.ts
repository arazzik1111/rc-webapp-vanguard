import { GaAccountCampaignEstimatesSchema } from '@models/swagger//GaAccountCampaignEstimatesSchema';

export type GaAccountCampaignEstimatesResponseSchema = {
  status?: number;
  data?: GaAccountCampaignEstimatesSchema;
  message?: string;
};
