import { UpsellingSubscriptionDataSchema } from '@models/swagger//UpsellingSubscriptionDataSchema';

export type UpsellingSubscriptionResponseDataSchema = {
  status?: number;
  data?: UpsellingSubscriptionDataSchema;
  message?: string;
};
