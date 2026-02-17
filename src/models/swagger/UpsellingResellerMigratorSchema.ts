import { SubscriptionSchema } from '@models/swagger//SubscriptionSchema';

export type UpsellingResellerMigratorSchema = {
  resellerAlias?: string;
  userEmail?: string;
  hasRightToMigrate?: boolean;
  currentSubscription?: SubscriptionSchema;
  targetedSubscription?: SubscriptionSchema;
  isUsingSameSubscription?: boolean;
  discountPercent?: number;
  hasChangedPassword?: boolean;
};
