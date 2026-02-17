import { GaAdGroupBudgetDataSchema } from '@models/swagger//GaAdGroupBudgetDataSchema';

export type GaAdGroupBudgetDataResponseSchema = {
  status?: number;
  data?: GaAdGroupBudgetDataSchema;
  message?: string;
};
