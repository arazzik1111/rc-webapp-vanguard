import { BoostAdCreative } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/BoostAdCreative';

export type BoostAdCreativePostRequestDto = {
  boostAdCreative?: BoostAdCreative;
  /**
   * The BoostCampaign objective
   */
  objective?: string;
  /**
   * Whether it is going to be published on Instagram or not
   */
  publishOnInstagram?: boolean;
};
