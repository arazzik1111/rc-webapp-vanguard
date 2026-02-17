import { GaInsightsBudgetHistoryDataSchema } from '@models/swagger//GaInsightsBudgetHistoryDataSchema';

export type GaInsightsBudgetHistorySchema = {
  budget_history?: GaInsightsBudgetHistoryDataSchema[];
  total_budget?: number;
  total_budget_formatted?: string;
  total_budget_used?: number;
  total_budget_used_formatted?: string;
  average_budget_used?: number;
  average_budget_used_formatted?: string;
};
