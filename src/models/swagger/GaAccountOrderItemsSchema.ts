import { GaAccountOrderItemsItemSchema } from '@models/swagger//GaAccountOrderItemsItemSchema';
import { GaAccountOrderItemsVatSchema } from '@models/swagger//GaAccountOrderItemsVatSchema';

export type GaAccountOrderItemsSchema = {
  orderItems: GaAccountOrderItemsItemSchema[];
  vat: GaAccountOrderItemsVatSchema;
  total: number;
  totalWithCurrency: string;
};
