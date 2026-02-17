import { BoostAdSetTargeting } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/BoostAdSetTargeting';

export type BoostAdAccountReachEstimateGetRequestDto = {
  targetingSpec: BoostAdSetTargeting;
  optimizationGoal: string;
};
