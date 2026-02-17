import { GaAccountKeywordSchema } from '@models/swagger//GaAccountKeywordSchema';

export type GaAccountKeywordResponseSchema = {
  searchVolumeShowLocal?: boolean;
  keywords?: GaAccountKeywordSchema[];
};
