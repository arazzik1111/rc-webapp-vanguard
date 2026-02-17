import { FAQItemsSchema } from '@models/swagger//FAQItemsSchema';

export type FAQDataResponseSchema = {
  status?: number;
  data?: FAQItemsSchema;
  message?: string;
};
