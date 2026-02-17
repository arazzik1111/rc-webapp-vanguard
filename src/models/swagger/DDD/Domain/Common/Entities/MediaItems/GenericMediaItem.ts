import { GenericMediaItemContent } from '@models/swagger/DDD/Domain/Common/Entities/MediaItems/GenericMediaItemContent';

export const GenericMediaItemType = {
  PHOTO: 'PHOTO',
  VIDEO: 'VIDEO',
  DOCUMENT: 'DOCUMENT',
};

export const GenericMediaItemTypeStrict = {
  PHOTO: 'PHOTO',
  VIDEO: 'VIDEO',
  DOCUMENT: 'DOCUMENT',
} as const;

export const GenericMediaItemObjectType = {
  DDD_Domain_Common_Entities_MediaItems_GenericMediaItem: 'DDD\\Domain\\Common\\Entities\\MediaItems\\GenericMediaItem',
};

export const GenericMediaItemObjectTypeStrict = {
  DDD_Domain_Common_Entities_MediaItems_GenericMediaItem: 'DDD\\Domain\\Common\\Entities\\MediaItems\\GenericMediaItem',
} as const;

export type GenericMediaItem = {
  /**
   * Public URL of the mediaitem
   */
  publicUrl?: string;
  /**
   * Description can be displayed on directories
   */
  description?: string;
  /**
   * The type of the mediaitem
   *  Allowed Values:
   * -   `PHOTO`: Photo type for media item
   * -   `VIDEO`: Video type for media item
   * -   `DOCUMENT`: Document type for media item
   *
   */
  type?: (typeof GenericMediaItemType)[keyof typeof GenericMediaItemType];
  mediaItemContent?: GenericMediaItemContent;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GenericMediaItemObjectType)[keyof typeof GenericMediaItemObjectType];
};
