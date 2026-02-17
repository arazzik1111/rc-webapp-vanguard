import { GaAccountPromoDataSchema } from '@models/swagger//GaAccountPromoDataSchema';

export type GaAccountPromoDataResponseSchema = {
  status?: number;
  data?: GaAccountPromoDataSchema;
  message?: string;
};
