import { BoostAdCreativeCallToAction } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdCreativeCallToAction';
import { BoostAdCreativeLinkDataChildAttachment } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdCreativeLinkDataChildAttachment';

export const BoostAdCreativeLinkDataObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdCreativeLinkData:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdCreativeLinkData',
};

export const BoostAdCreativeLinkDataObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdCreativeLinkData:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdCreativeLinkData',
} as const;

export type BoostAdCreativeLinkData = {
  /**
   * Name of the link. Overwrite the title of the link when you preview the ad. This is the ad headline.
   */
  name?: string;
  /**
   * Link description. Overwrites the description in the link when your ad displays. You do not use this setting for Instagram ads. This is the sub-headline of the ad.
   */
  description?: string;
  /**
   * Link url. This url is required to be the same as the CTA link url. This field is required for a carousel ad
   */
  link?: string;
  /**
   * URL of a picture to use in the post. The image specified at the URL will be saved into the ad accounts image library
   */
  picture?: string;
  /**
   * The main body of the post. This field is required for a carousel ad
   */
  message?: string;
  /**
   * This field is used when multiple attachments need to be set for the boost post
   */
  childAttachments?: BoostAdCreativeLinkDataChildAttachment[];
  callToAction?: BoostAdCreativeCallToAction;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdCreativeLinkDataObjectType)[keyof typeof BoostAdCreativeLinkDataObjectType];
};
