import { UpsellingSubscriptionSchema } from '@models/swagger//UpsellingSubscriptionSchema';

export type UpsellingSubscriptionDataSchema = {
  activeSubscriptionId?: number;
  subscriptions?: UpsellingSubscriptionSchema[];
  resellerAlias?: string;
  avatarLink?: string;
  title?: string;
  subtitle?: string;
  resellerName?: string;
  productName?: string;
  privacyPolicy?: string;
  termsAndConditions?: string;
  support?: string;
  upsellingPageTemplate?: string;
  activeFeatures?: any[];
  recommendedSubscription?: number;
  goodWillPeriod?: number;
  subscriptionBenefits?: any[];
  hasBlackFridaySpecialOffer?: boolean;
  specialOffers?: object;
};
