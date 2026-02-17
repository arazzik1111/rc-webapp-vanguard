import { GaAdDescriptionSchema } from '@models/swagger//GaAdDescriptionSchema';
import { GaAdGroupKeywordSchema } from '@models/swagger//GaAdGroupKeywordSchema';
import { GaAdHeadlineSchema } from '@models/swagger//GaAdHeadlineSchema';

export type GaAdGroupSchema = {
  id?: number;
  ad_account_id?: number;
  created?: number;
  hash?: string;
  path?: string;
  path2?: string;
  domain?: string;
  display_url?: string;
  status?: string;
  review_status?: string;
  approval_status?: string;
  disapproval_reasons?: string[];
  headlines?: GaAdHeadlineSchema[];
  descriptions?: GaAdDescriptionSchema[];
  keywords?: GaAdGroupKeywordSchema[];
  warningMessage?: string;
};
