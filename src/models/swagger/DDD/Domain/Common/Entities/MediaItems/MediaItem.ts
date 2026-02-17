export const MediaItemType = {
  photo: 'photo',
  video: 'video',
  DOCUMENT: 'DOCUMENT',
};

export const MediaItemTypeStrict = {
  photo: 'photo',
  video: 'video',
  DOCUMENT: 'DOCUMENT',
} as const;

export const MediaItemObjectType = {
  DDD_Domain_Common_Entities_MediaItems_MediaItem: 'DDD\\Domain\\Common\\Entities\\MediaItems\\MediaItem',
};

export const MediaItemObjectTypeStrict = {
  DDD_Domain_Common_Entities_MediaItems_MediaItem: 'DDD\\Domain\\Common\\Entities\\MediaItems\\MediaItem',
} as const;

export type MediaItem = {
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
   * The type of the mediaitem
   *  Allowed Values:
   * -   `photo`: Photo type for media item
   * -   `video`: Video type for media item
   * -   `DOCUMENT`: Document type for media item
   *
   */
  type?: (typeof MediaItemType)[keyof typeof MediaItemType];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof MediaItemObjectType)[keyof typeof MediaItemObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
