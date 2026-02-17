export type GaAccountOrderItemsRequestSchema = {
  subscription_id?: number;
  yearly_subscription_id?: number;
  monthly_subscription_id?: number;
  shouldForceActivateAds?: boolean;
  shouldUpgradeFormMonthlyToYearly?: boolean;
};
