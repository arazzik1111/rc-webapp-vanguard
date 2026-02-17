import { GaAccountOrderItemsSchema } from '@models/swagger//GaAccountOrderItemsSchema';

export type GaAccountOrderItemsResponseSchema = {
  status?: number;
  data?: GaAccountOrderItemsSchema;
  message?: string;
};
