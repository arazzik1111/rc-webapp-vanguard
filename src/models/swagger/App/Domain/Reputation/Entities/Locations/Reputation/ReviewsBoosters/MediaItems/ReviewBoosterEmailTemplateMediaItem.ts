import { ReviewBoosterEmailTemplateMediaItemContent } from '@models/swagger/App/Domain/Reputation/Entities/Locations/Reputation/ReviewsBoosters/MediaItems/ReviewBoosterEmailTemplateMediaItemContent';

export const ReviewBoosterEmailTemplateMediaItemType = {
  photo: 'photo',
};

export const ReviewBoosterEmailTemplateMediaItemTypeStrict = {
  photo: 'photo',
} as const;

export const ReviewBoosterEmailTemplateMediaItemObjectType = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_MediaItems_ReviewBoosterEmailTemplateMediaItem:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\MediaItems\\ReviewBoosterEmailTemplateMediaItem',
};

export const ReviewBoosterEmailTemplateMediaItemObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewsBoosters_MediaItems_ReviewBoosterEmailTemplateMediaItem:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewsBoosters\\MediaItems\\ReviewBoosterEmailTemplateMediaItem',
} as const;

export type ReviewBoosterEmailTemplateMediaItem = {
  mediaItemContent?: ReviewBoosterEmailTemplateMediaItemContent;
  /**
   * The identifier of the media item
   */
  identifier?: string;
  /**
   * The type of the mediaitem
   *  Allowed Values:
   * -   `photo`: Photo type for media item
   *
   */
  type?: (typeof ReviewBoosterEmailTemplateMediaItemType)[keyof typeof ReviewBoosterEmailTemplateMediaItemType];
  /**
   * Public URL of the mediaitem
   */
  publicUrl?: string;
  /**
   * Description can be displayed on directories
   */
  description?: string;
  /**
   * - Represents the number of views
   */
  viewCount?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewBoosterEmailTemplateMediaItemObjectType)[keyof typeof ReviewBoosterEmailTemplateMediaItemObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
