import { MediaItem } from '@models/swagger/DDD/Domain/Common/Entities/MediaItems/MediaItem';

export const MediaItemsObjectType = {
  DDD_Domain_Common_Entities_MediaItems_MediaItems: 'DDD\\Domain\\Common\\Entities\\MediaItems\\MediaItems',
};

export const MediaItemsObjectTypeStrict = {
  DDD_Domain_Common_Entities_MediaItems_MediaItems: 'DDD\\Domain\\Common\\Entities\\MediaItems\\MediaItems',
} as const;

export type MediaItems = {
  elements?: MediaItem[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof MediaItemsObjectType)[keyof typeof MediaItemsObjectType];
};
