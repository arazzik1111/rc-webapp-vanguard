import { GaAccountPrepaidOptionItemSchema } from '@models/swagger//GaAccountPrepaidOptionItemSchema';

export type GaAccountPrepaidOptionsDataSchema = {
  success?: boolean;
  prepaidOptions?: GaAccountPrepaidOptionItemSchema[];
  selectedOption?: number;
  totalDailyBudget?: string;
  ppddBalance?: number;
};
