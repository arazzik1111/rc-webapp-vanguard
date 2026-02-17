import { GaAccountOrderItemsItemAdditionalProjectsSchema } from '@models/swagger//GaAccountOrderItemsItemAdditionalProjectsSchema';
import { GaAccountOrderItemsItemDescriptionSchema } from '@models/swagger//GaAccountOrderItemsItemDescriptionSchema';
import { GaAccountOrderItemsItemDiscountSchema } from '@models/swagger//GaAccountOrderItemsItemDiscountSchema';

export type GaAccountOrderItemsItemSchema = {
  name?: string;
  type?: string;
  price?: number;
  priceWithCurrency?: string;
  description?: GaAccountOrderItemsItemDescriptionSchema;
  additionalProjects?: GaAccountOrderItemsItemAdditionalProjectsSchema;
  discount?: GaAccountOrderItemsItemDiscountSchema;
};
