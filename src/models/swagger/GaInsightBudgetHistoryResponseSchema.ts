import { GaInsightsBudgetHistorySchema } from '@models/swagger//GaInsightsBudgetHistorySchema';

export type GaInsightBudgetHistoryResponseSchema = {
  status?: number;
  data?: GaInsightsBudgetHistorySchema;
  message?: string;
};
