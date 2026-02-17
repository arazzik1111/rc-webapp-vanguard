import { SubscriptionSchema } from '@models/swagger//SubscriptionSchema';

export type AffiliateRegistrationSchema = {
  discountPercent?: number;
  newSubscription?: SubscriptionSchema;
  headerFeatures?: string[];
};
