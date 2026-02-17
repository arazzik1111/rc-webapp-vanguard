export const MediaItemContentObjectType = {
  App_Domain_Common_Entities_MediaItems_MediaItemContent: 'App\\Domain\\Common\\Entities\\MediaItems\\MediaItemContent',
};

export type MediaItemContent = {
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
   * Body content
   */
  body?: string;
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
  /**
   * The internal identifier of the entity
   */
  id?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof MediaItemContentObjectType)[keyof typeof MediaItemContentObjectType];
};
