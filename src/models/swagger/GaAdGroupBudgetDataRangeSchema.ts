export type GaAdGroupBudgetDataRangeSchema = {
  min?: number;
  min_temporary?: number;
  max?: number;
  max_temporary?: number;
  min_premium_limit?: number;
  max_premium_limit?: number;
  hasTemporaryLimit?: boolean;
  temporaryTimestamp?: number;
  min_actual?: number;
  max_actual?: number;
  popular_min?: number;
  popular_max?: number;
};
