import { BoostAdCreativeLinkData } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdCreativeLinkData';

export const BoostAdCreativeObjectStorySpecObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdCreativeObjectStorySpec:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdCreativeObjectStorySpec',
};

export const BoostAdCreativeObjectStorySpecObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdCreativeObjectStorySpec:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdCreativeObjectStorySpec',
} as const;

export type BoostAdCreativeObjectStorySpec = {
  /**
   * The Instagram user account that the story will be posted to
   */
  instagramActorId?: string;
  linkData?: BoostAdCreativeLinkData;
  /**
   * ID of a Facebook page. An unpublished page post will be created on this page. User must have Admin or Editor role for this page.
   */
  pageId?: string;
  /**
   * The external id of the facebook post. This not used for creating the AdCreative, it is only used for storage purposes.
   */
  postExternalId?: string;
  /**
   * From Argus Load the response can hold only the callToAction and object Story Id, there is no objectStorySpecs - so we save it here
   */
  callToActionType?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdCreativeObjectStorySpecObjectType)[keyof typeof BoostAdCreativeObjectStorySpecObjectType];
};
