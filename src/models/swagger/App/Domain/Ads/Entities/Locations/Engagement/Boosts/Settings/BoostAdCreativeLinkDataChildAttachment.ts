import { BoostAdCreativeCallToAction } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdCreativeCallToAction';

export const BoostAdCreativeLinkDataChildAttachmentObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdCreativeLinkDataChildAttachment:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdCreativeLinkDataChildAttachment',
};

export const BoostAdCreativeLinkDataChildAttachmentObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdCreativeLinkDataChildAttachment:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdCreativeLinkDataChildAttachment',
} as const;

export type BoostAdCreativeLinkDataChildAttachment = {
  /**
   * Overwrites the title of the attachment on Facebook, not used on Instagram. This is the ad headline.
   */
  name?: string;
  /**
   * Link description. Overwrites the description in the link when your ad displays. You do not use this setting for Instagram ads. This is the sub-headline of the ad.
   */
  description?: string;
  /**
   * The link of this attachment. This has to be the same as the CTA link.
   */
  link?: string;
  /**
   * The url of an image for this attachment. The image specified at the URL will be saved into the ad accounts image library.
   */
  picture?: string;
  callToAction?: BoostAdCreativeCallToAction;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdCreativeLinkDataChildAttachmentObjectType)[keyof typeof BoostAdCreativeLinkDataChildAttachmentObjectType];
};
