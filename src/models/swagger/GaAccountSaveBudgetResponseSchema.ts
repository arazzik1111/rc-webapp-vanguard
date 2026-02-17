import { GaAccountSaveBudgetDataSchema } from '@models/swagger//GaAccountSaveBudgetDataSchema';

export type GaAccountSaveBudgetResponseSchema = {
  status?: number;
  data?: GaAccountSaveBudgetDataSchema;
  message?: string;
};
