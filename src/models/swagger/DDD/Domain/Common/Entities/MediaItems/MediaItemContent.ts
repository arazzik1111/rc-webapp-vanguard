export const MediaItemContentObjectType = {
  DDD_Domain_Common_Entities_MediaItems_MediaItemContent: 'DDD\\Domain\\Common\\Entities\\MediaItems\\MediaItemContent',
};

export const MediaItemContentObjectTypeStrict = {
  DDD_Domain_Common_Entities_MediaItems_MediaItemContent: 'DDD\\Domain\\Common\\Entities\\MediaItems\\MediaItemContent',
} as const;

export type MediaItemContent = {
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof MediaItemContentObjectType)[keyof typeof MediaItemContentObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  base64EncodedContent?: string;
  /**
   * Height in pixels
   */
  height?: number;
  /**
   * Width in pixels
   */
  width?: number;
  /**
   * File size in bytes
   */
  fileSize?: number;
  /**
   * File format
   */
  fileFormat?: string;
  /**
   * Name of the mediaItem
   */
  name?: string;
  /**
   * If true, photo uses compression
   */
  compression?: boolean;
  /**
   * Mediaitem external id
   */
  externalId?: string;
};
