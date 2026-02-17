import { GaAdAccountInsightsSchema } from '@models/swagger//GaAdAccountInsightsSchema';

export type GaAdgroupsStatsSchema = {
  adGroupId?: number;
  stats?: GaAdAccountInsightsSchema;
};
