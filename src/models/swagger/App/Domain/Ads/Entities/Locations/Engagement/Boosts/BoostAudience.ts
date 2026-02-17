import { BoostAdSetTargeting } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/BoostAdSetTargeting';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const BoostAudienceType = {
  saved_audiences: 'saved_audiences',
  customaudiences: 'customaudiences',
};

export const BoostAudienceTypeStrict = {
  saved_audiences: 'saved_audiences',
  customaudiences: 'customaudiences',
} as const;

export const BoostAudienceObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostAudience:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostAudience',
};

export const BoostAudienceObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_BoostAudience:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\BoostAudience',
} as const;

export type BoostAudience = {
  /**
   * The facebook id of the Audience
   */
  externalId?: string | number;
  /**
   * The name of the audience
   */
  name?: string;
  /**
   * The type of the audience
   *  Allowed Values:
   * -   `saved_audiences`
   * -   `customaudiences`
   *
   */
  type?: (typeof BoostAudienceType)[keyof typeof BoostAudienceType];
  /**
   * The subtype of the audience. Mostly used for defining custom Audiences
   */
  subtype?: string;
  adSetTargeting?: BoostAdSetTargeting;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAudienceObjectType)[keyof typeof BoostAudienceObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
